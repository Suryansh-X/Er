// Progress Bar
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("myBar").style.width = (winScroll / height) * 100 + "%";
};

// Autoplay Music
document.addEventListener('click', function() {
    let audio = document.getElementById("tumbi");
    audio.play();
}, { once: true });

function accessGallery() {
    let pass = prompt("ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ:");
    if (pass === "gohartej#£89") window.location.href = "upload.html";
    else alert("ਗਲਤ ਪਾਸਵਰਡ!");
}

function displayGallery(files) {
    const grid = document.getElementById('grid');
    for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e) => {
            let img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'gallery-item';
            grid.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
}
