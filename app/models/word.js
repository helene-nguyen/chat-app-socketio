//~ IMPORT PG
import { pool } from '../db/client.js';

class WordModel {
  static async check(word) {

    const { rows } = await pool.query('SELECT * FROM checkWord($1)', [word]);

    return rows[0].result;
  }
}

export { WordModel };
