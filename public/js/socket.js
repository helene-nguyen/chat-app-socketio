// on récupère l'importation de socket.io une fois 
// qu'on a établi un lien dans notre fichier html concerné
const socket = io();

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (input.value) {
    // envoi d'un message au serveur
    socket.emit(salon, input.value);
    input.value = '';
  }
});

// réception d'un message depuis le serveur
socket.on(salon, function(msg) {
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

