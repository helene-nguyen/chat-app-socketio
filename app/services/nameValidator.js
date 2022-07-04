import joi from 'joi';
const Joi = joi;

// - minimum 4 caractères
// - maximum 15 caractères
// - majuscule sur la première lettre
// - aucun caractère spécial sauf le "-"
const schema = Joi.object({
    pseudo: Joi.string()
    .pattern(new RegExp('^[A-Z][a-zA-Z-]{3,14}$')).required() // format attendu pour le pseudo
});

const nameValidator = (req,res,next)=>{
    const { error } = schema.validate(req.body);
    if(error){
        //je remonte l'erreur
    }
    else{
        next();
    }
};

export { nameValidator };