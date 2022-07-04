//~ IMPORTATION ERROR
import { _400, _404, _500 } from './errorController.js';

// ~ ------------------------------------ GET CHAT PAGE
async function getChatPage(req,res){

    try {

        res.render("chat",{
            chat: "Sa nouvelle machine à panini échoue à lui faire oublier son ex",
            chatLink: "https://www.legorafi.fr/2022/06/30/sa-nouvelle-machine-a-panini-echoue-a-lui-faire-oublier-son-ex/",
            salon: "number_1"
        });

    } catch (error) {
        _500(err, req, res);
    }
       
}

export { getChatPage };