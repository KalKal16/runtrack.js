// Sélection du bouton pour afficher le texte
const hideButton = document.getElementById('hideButton');
const showButton = document.getElementById('showButton');
const textContainer = document.getElementById('textContainer');

showButton.addEventListener('click', function() {
  textContainer.style.display = 'block';
});

hideButton.addEventListener('click', function() {
  textContainer.style.display = 'none';
});
