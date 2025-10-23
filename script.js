document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("thanksBtn");
    const msg = document.getElementById("message");

    btn.addEventListener("click", function() {
        msg.classList.toggle("show");
    });
});
