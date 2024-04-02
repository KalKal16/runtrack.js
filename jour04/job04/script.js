document.addEventListener("DOMContentLoaded", function() {
    const updateButton = document.getElementById("update-button");
    const tbodyUtilisateurs = document.getElementById("tbody-utilisateurs");
    function chargerUtilisateurs() {
      fetch("utilisateur.json")
        .then(response => response.json())
        .then(data => {
          tbodyUtilisateurs.innerHTML = "";
          data.forEach(utilisateur => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td>${utilisateur.id}</td>
              <td>${utilisateur.nom}</td>
              <td>${utilisateur.prenom}</td>
              <td>${utilisateur.email}</td>
            `;
            tbodyUtilisateurs.appendChild(tr);
          });
        })
    }
    updateButton.addEventListener("click", chargerUtilisateurs);
    chargerUtilisateurs();
  });