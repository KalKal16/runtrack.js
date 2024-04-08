document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if (email.endsWith("@laplateforme.io")) {
            var users = JSON.parse(localStorage.getItem("users")) || [];
            var existingUser = users.find(function(user) {
                return user.email === email;
            });

            if (existingUser) {
                document.getElementById("signupMessage").innerHTML = "<div class='alert alert-danger'>Cet utilisateur existe déjà.</div>";
            } else {
                var newUser = {
                    email: email,
                    password: password
                };
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                document.getElementById("signupMessage").innerHTML = "<div class='alert alert-success'>Inscription réussie ! Redirection en cours...</div>";
                setTimeout(function() {
                    window.location.href = "connexion.html";
                }, 2000);
            }
        } else {
            document.getElementById("signupMessage").innerHTML = "<div class='alert alert-danger'>Adresse email non autorisée.</div>";
        }
    });
});
