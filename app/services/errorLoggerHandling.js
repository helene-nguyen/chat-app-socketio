// Journalisation logger
//~import modules
import { formattedDate } from "../utils/formattedDate.js";
import * as fs from 'fs';

//~ resolve __dirname
//& Méthode avec destructuring
import { resolve, join } from "path";
const __dirname = resolve(`./app/services`);
// Ici resolve recupère le chemin jusqu'au root de notre api

//& Méthode sans destructuring
// import path from 'path';
// const __dirname = path.resolve('../../logs/');

//& Méthode autre 
// import path from 'path';
// import { fileURLToPath } from 'node:url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

console.log("__dirname: ", __dirname);

//~ Logger
import debug from 'debug';
const logger = debug('ErrorHandling');

logger('-------------------- ERROR LOGGER HANDLING --------------------');

const errorLoggerHandling = {
    /**
     * Manage error
     */

    manage(err, req, res) { 
        logger("Manage", err.message);
        // Enregistrer l'erreur dans des logs

        const actualDate = new Date();

        // formatage du message ( Heure + informations de l'erreur) 
        const logMessage = `${actualDate.toLocaleString()} - ${req.url} - ${err.message}\r`;
        logger("Message du log", logMessage);

        // format date du fichier de log (Année-Mois-Jour)
        const fileName = `${formattedDate}.log`;
        logger("Nom du fichier de log", fileName);


        // ajout d'une ligne au fichier de log (création de celui-ci s'il n'existe pas)
        //& Méthode 1
        fs.appendFile(join(__dirname, `../../logs/${fileName}`), logMessage, (error) => {

        //& Méthode 3
        // fs.appendFile(path.join(__dirname, `../../logs/${fileName}`), logMessage, (error) => {

            if (error) logger(error);
        });
        logger(logMessage)
        logger('----------------------------------------');
    }

    
};

export { errorLoggerHandling };