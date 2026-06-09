// ਪੰਜਾਬੀ ਅੱਖਰਾਂ ਵਾਲੇ ਪਾਰਟੀਕਲ
const canvas = document.getElementById('punjabiParticles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ੳਅੲਸਹਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ".split("");
let particles = [];

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: letters[Math.floor(Math.random() * letters.length)],
        size: Math.random() * 20 + 10,
        speed: Math.random() * 0.5 + 0.2
    };
}

for(let i=0; i<40; i++) particles.push(createParticle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.font = p.size + "px serif";
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillText(p.char, p.x, p.y);
        p.y += p.speed;
        if(p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animate);
}
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
