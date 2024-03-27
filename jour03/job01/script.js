// Sélection du bouton pour afficher le texte
const hideButton = document.getElementById('hideButton');
const showButton = document.getElementById('showButton');
const text = document.getElementById('textContainer');

showButton.addEventListener('click', function() {
  text.style.display = 'block';
});

hideButton.addEventListener('click', function() {
  text.style.display = 'none';
});
