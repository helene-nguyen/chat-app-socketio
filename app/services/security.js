
//~ -------------------------------------- CHECK SECURITY
function checkSecurity(req, res, next){
    if(req.session.user){
        next();
    }
    else{
        res.redirect("/");
    }
}


export { checkSecurity };