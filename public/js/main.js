const app = {
    init(){
        // je place un événement pour gérer l'envoi du formulaire
        document.querySelector("#pseudo").addEventListener("submit",app.setPseudo);
    },

    async setPseudo(event){
        event.preventDefault();

        // on utilise FormData pour transformer le formulaire en un objet
        const form = new FormData(event.target);
        const response = await fetch("/pseudo",{
            method:"POST",
            body:form
        });

        if(response.ok){
            // une fois le pseudo enregistré, je redirige vers la page "ragot"
            window.location = "/chat";
        }
    }
};
app.init();