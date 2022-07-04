import { WordModel } from '../models/word.js';

const messageService = {
  manage(socket, io) {
    socket.on('number_1', async msg => {

      //& 1. je découpe mon message mot à mot
      const words = msg.split(' ');
      const finalWords = [];

      //& 2. je vérifie si le mot est un gros mot
      for (const word of words) {
        console.log("word: ", word);
        const isWrong = await WordModel.check(word);

        if (isWrong) {

          // si le mot n'est pas valide, je remplace par des ***
          let stars = '';
          for (let counter = 0; counter < word.length; counter++) {
            stars += '*';
          }
          finalWords.push(stars);
        } else {
          finalWords.push(word);
        }
      }
      //& 3. je reforme mon message
      const finalMSG = finalWords.join(' ');

      io.emit('number_1', socket.request.session.user + ' : ' + finalMSG);
    });
  }
};

export { messageService };
