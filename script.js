const canvas = document.getElementById('neonRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drops = [];

for(let i = 0; i < 100; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    velocity: Math.random() * 4 + 2,
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#00ff00';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#00ff00';
  ctx.shadowBlur = 10;

  drops.forEach(drop => {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();

    drop.y += drop.velocity;
    if(drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
      drop.length = Math.random() * 20 + 10;
      drop.velocity = Math.random() * 4 + 2;
    }
  });

  requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const path = window.location.pathname;
const filename = path.substring(path.lastIndexOf('/') + 1);
if (filename === "Students.html"){
  const UserMode = localStorage.getItem("UserMode")
  if (UserMode != "True"){
    window.location.href = "index.html";
  }
}

const ButtonLogin = document.getElementById("LoginButton")
const Username = document.getElementById("UsernameInput")
const Password = document.getElementById("PasswordInput")

ButtonLogin.addEventListener("click", function() {
  if (Username.value === "SarafCode03"){
    if (Password.value === "SarafCode03"){
      if (localStorage.getItem("UserMode") === "True"){
        localStorage.setItem("UserMode", "False")
        window.location.href = "index.html";
        alert("Exited !")
      }else{
        localStorage.setItem("UserMode", "True")
        window.location.href = "index.html";
        alert("Success !")
      }
    }else {
      alert("Wrong Username Or Password Not Correct!")
    }
  }else {
    alert("Wrong Username Or Password Not Correct!")
  }
})