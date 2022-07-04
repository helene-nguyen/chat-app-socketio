//~IMPORT DES MODULES
import {Router} from 'express';
const router = Router();


import { getHomePage, setHomePseudo } from './controllers/homepage.js';
import { getChatPage } from './controllers/chat.js';
import { nameValidator } from './services/namevalidator.js'
import { checkSecurity } from './services/security.js';


//~ NOS ROUTES
router.get('/', getHomePage);
router.get('/chat', checkSecurity, getChatPage);
router.post("/pseudo", nameValidator , setHomePseudo)


export { router };