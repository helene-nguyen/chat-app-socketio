//~ IMPORTATION ERROR
import { _400, _404, _500 } from './errorController.js';

// ~ ------------------------------------ GET HOME PAGE
async function getHomePage(req, res) {
  try {
    res.render('index');
  } catch (err) {
    _500(err, req, res);
  }
}

// ~ ------------------------------------ SET PSEUDO
async function setHomePseudo(req, res) {
  try {
    req.session.user = req.body.pseudo;
    res.json(true);
  } catch (err) {
    _500(err, req, res);
  }
}

export { getHomePage, setHomePseudo };
