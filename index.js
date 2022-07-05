//~ ENVIRONNEMENT
import 'dotenv/config';

//~ IMPORT DES MODULES
import express from 'express';
const app = express();
import { router } from './app/router.js';

import { messageService } from './app/services/message.js';
// import { server, io } from './app/services/socketServer.js'
//! C'est le server qu'on va utiliser pour lancer l'app
//! import http
import { createServer } from 'http';
const server = createServer(app);


//~ CONFIG Socket.io
import { Server } from 'socket.io';
const io = new Server(
  server
  //     , {
  //     cors: {
  //         origin: 'http://localhost:4100',
  //         methods: ['GET', 'POST']
  //     }
  // }
);


import { _404 } from './app/controllers/errorController.js';

//~ DEBUG
import debug from 'debug';
const logger = debug('EntryPoint');


//~ SESSION
import session from 'express-session';
const sessionMiddleware = session({
    //!ne pas oublier de toute préciser sinon deprecated
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: true,
    saveUninitialized: true
})
app.use(sessionMiddleware);

//~ URL ENCODED
// app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
// }));

//~ Mettre middleware dans socket.io
// convertit la connection Socket.io en middleware
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

//~ MIDDLEWARE Socket.io
io.use(wrap(sessionMiddleware));


//~ MULTER FOR FORMDATA
import multer from 'multer';
let upload = multer();
app.use(upload.array());


//~ PUBLIC
app.set('view engine', 'ejs');
app.set("views", "./app/views");
app.use(express.static('public'));

//~ Gestion des canaux créés par Socket.io
io.on('connection', socket => {
    // je gère un premier chat
    socket.on('#jesuismichel', msg => {
      io.emit('#jesuismichel', msg);
    });
  
    // je gère un second chat
    socket.on('#jesuismichel_2', msg => {
      io.emit('#jesuismichel_2', msg);
    });
  
    // gestion de socket io dans mon service
    messageService.manage(socket, io);
  });


//~ ROUTER
app.use(router);

//~ ERROR
app.use(_404);


//~ LANCEMENT DU SERVEUR
const PORT = process.env.PORT ?? 3000;

// En cas d'erreur :
// GET http://localhost:4100/socket.io/socket.io.js net::ERR_ABORTED 404 (Not Found)
// il faut passer app.listen en server.listen

server.listen(PORT, () => {
    logger('--------------------------------------------------------------');
    logger(`🚀 \x1b[1;35m Launch server on http://localhost:${PORT}\x1b[0m`);
    logger('--------------------------------------------------------------');
  });