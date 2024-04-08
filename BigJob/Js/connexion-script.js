document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var loginEmail = document.getElementById("loginEmail").value;
        var loginPassword = document.getElementById("loginPassword").value;
        function authenticateUser(email, password) {
            var users = JSON.parse(localStorage.getItem("users")) || [];
            var user = users.find(function(user) {
                return user.email === email && user.password === password;
            });
            return user;
        }
        var user = authenticateUser(loginEmail, loginPassword);

        if (user) {
            document.getElementById("loginMessage").innerHTML = "<div class='alert alert-success'>Connexion réussie ! Redirection en cours...</div>";
            setTimeout(function() {
                window.location.href = "test.html";
            }, 2000);
        } else {
            document.getElementById("loginMessage").innerHTML = "<div class='alert alert-danger'>Adresse email ou mot de passe incorrect.</div>";
        }
    });
});
