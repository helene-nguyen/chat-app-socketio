//~ IMPORT DES MODULES
import express from 'express';
const app = express();
import { messageService } from './message.js';

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


//! Reserved events
// On each side, the following events are reserved and should not be used as event names by your application:

// connect
// connect_error
// disconnect
// disconnecting
// newListener
// removeListener

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

export { server, io };
