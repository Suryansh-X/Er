// ਪੰਜਾਬੀ ਅੱਖਰਾਂ ਵਾਲੇ ਪਾਰਟੀਕਲ
const canvas = document.getElementById('electronCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ੳਅੲਸਹਕਖਗਘਚਛਜਝਟਠਡਢਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ".split("");
let particles = [];

function init() {
    for(let i=0; i<80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            char: letters[Math.floor(Math.random() * letters.length)],
            speed: Math.random() * 5 + 2,
            hue: Math.random() * 360
        });
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.fillStyle = `hsl(${p.hue}, 100%, 50%)`;
        ctx.font = "20px Arial";
        ctx.fillText(p.char, p.x, p.y);
        p.y -= p.speed;
        if(p.y < 0) p.y = canvas.height;
        p.x += Math.sin(p.y * 0.05) * 2;
    });
    requestAnimationFrame(animate);
}

init();
animate();

// ਗੈਲਰੀ ਫੰਕਸ਼ਨ
function accessGallery() {
    let pass = prompt("ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ:");
    if (pass === "gohartej#£89") window.open("upload.html", "_blank", "width=600,height=400");
    else alert("ਗਲਤ ਪਾਸਵਰਡ!");
}

function displayGallery(files) {
    const grid = document.getElementById('grid');
    for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e) => {
            let img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'w-full h-72 object-cover gold-border';
            grid.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

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
