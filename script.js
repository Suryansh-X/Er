function playMusic() {
    let audio = document.getElementById("tumbi");
    audio.paused ? audio.play() : audio.pause();
}

function accessGallery() {
    let pass = prompt("ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ:");
    if (pass === "gohartej#£89") {
        window.location.href = "upload.html";
    } else {
        alert("ਗਲਤ ਪਾਸਵਰਡ!");
    }
}
