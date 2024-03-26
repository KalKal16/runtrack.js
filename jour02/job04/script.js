const keylogger = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    if (event.key.match(/[a-z]/i)) {
        const isFocused = (document.activeElement === keylogger);
        if (isFocused) {
            keylogger.value += event.key + event.key;
        } else {
            keylogger.value += event.key;
        }
    }
});
