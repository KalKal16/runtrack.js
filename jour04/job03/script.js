function filtrerDonnees() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            const resultat = data.filter(element => {
                return (id === '' || element.id === parseInt(id)) && (name === '' || element.name.english.toLowerCase().includes(name.toLowerCase())) && (type === '' || element.type.includes(type));
            });
            afficherResultat(resultat);
        })
}

function afficherResultat(resultat) {
    const resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML = '';

    if (resultat.length === 0) {
        resultatDiv.textContent = "Aucun résultat trouvé.";
    } else {
        const ul = document.createElement('ul');
        resultat.forEach(element => {
            const li = document.createElement('li');
            li.textContent = `ID: ${element.id}, Name: ${element.name.english}, Type: ${element.type.join(', ')}`;
            ul.appendChild(li);
        });
        resultatDiv.appendChild(ul);
    }
}
