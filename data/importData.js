import 'dotenv/config';

import words from './bad_words.json' assert {type: 'json'};
import { pool } from '../app/db/client.js';

async function importData(){
  // await client.connect();

  await pool.query('TRUNCATE word;');

  let queryTemp = '';
  for (const word of words) {
    if (queryTemp == '') {
      queryTemp += `('${word}')`;
    } else {
      queryTemp += `,('${word}')`;
    }
  }

  const preparedQuery = `
    INSERT INTO public.word(
         description) VALUES
         ${queryTemp};
    `;

  await pool.query(preparedQuery);

  // client.end();
};

importData();