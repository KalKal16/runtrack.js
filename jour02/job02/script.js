document.getElementById("button").addEventListener("click", showhide);

function showhide() {
    let article = document.getElementById("article");
    if (article.style.display === "none" || article.style.display === "") {
        article.style.display = "block";
    } else {
        article.style.display = "none";
    }
}
