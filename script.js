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

try {
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
} catch(error) {
  console.log(error)
}
const SearchInput = document.getElementById("SearchInput");
function Load(){
  fetch('Data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const container = document.getElementById('container');

      data.forEach(student => {
      
        const div = document.createElement('div');
        div.id = 'Elements';

        const img = document.createElement('img');
        img.src = 'Students.jpeg';
        img.alt = 'BookImage';
        img.id = 'ImageStudent';

        const textDiv = document.createElement('div');
        textDiv.className = 'StudentText';

        const h1 = document.createElement('h1');
        h1.id = 'h1Student';
        h1.textContent = student.Name;


        const pFather = document.createElement('p');
        pFather.className = 'pStudent';
        pFather.textContent = 'نام پدر : ' + student.FatherName;

        const pLibrary = document.createElement('p');
        pLibrary.className = 'pStudent';
        pLibrary.textContent = 'کد کتابخانه : ' + student.LibraryCode;

        const pNational = document.createElement('p');
        pNational.className = 'pStudent';
        pNational.textContent = 'کد ملی : ' + student.CodeN;

        const pMobile = document.createElement('p');
        pMobile.className = 'pStudent';
        pMobile.textContent = 'شماره موبایل : ' + student.PhoneNumber;

        const pGrade = document.createElement('p');
        pGrade.className = 'pStudent';
        pGrade.textContent = 'پایه : ' + student.AgeSchool;

        const pClass = document.createElement('p');
        pClass.className = 'pStudent';
        pClass.textContent = 'نام کلاس : ' + student.ClassName;


        textDiv.appendChild(h1);
        textDiv.appendChild(pFather);
        textDiv.appendChild(pLibrary);
        textDiv.appendChild(pNational);
        textDiv.appendChild(pMobile);
        textDiv.appendChild(pGrade);
        textDiv.appendChild(pClass);


        div.appendChild(img);
        div.appendChild(textDiv);


        container.appendChild(div);
        console.log("Good")
      });

    })
    .catch(error => console.error('خطا در خواندن فایل JSON:', error));
}
SearchInput.addEventListener('input', function() {
    valuesearch = SearchInput.value;
    if (!valuesearch) {
        Load();
    } else {
        search();
    }
    }
);

function search() {
    
  const searchTerm = SearchInput.value;

  fetch('Data.json')
  .then(response => response.json())
  .then(data => {
    
    const container = document.getElementById('container');
    container.innerHTML = "";
    const sk = searchTerm;
    
    
    const filteredData = data.filter(student => 
      student.Name.toLowerCase().includes(sk.toLowerCase())
    );
    console.log(filteredData);

    filteredData.forEach(student => {
      const div = document.createElement('div');
      div.id = 'Elements';

      const img = document.createElement('img');
      img.src = 'Students.jpeg';
      img.alt = 'BookImage';
      img.id = 'ImageStudent';

      const textDiv = document.createElement('div');
      textDiv.className = 'StudentText';

      const h1 = document.createElement('h1');
      h1.id = 'h1Student';
        h1.textContent = student.Name;

      const pFather = document.createElement('p');
      pFather.className = 'pStudent';
      pFather.textContent = 'نام پدر : ' + student.FatherName;

      const pLibrary = document.createElement('p');
      pLibrary.className = 'pStudent';
      pLibrary.textContent = 'کد کتابخانه : ' + student.LibraryCode;

      const pNational = document.createElement('p');
      pNational.className = 'pStudent';
      pNational.textContent = 'کد ملی : ' + student.CodeN;

      const pMobile = document.createElement('p');
      pMobile.className = 'pStudent';
      pMobile.textContent = 'شماره موبایل : ' + student.PhoneNumber;

      const pGrade = document.createElement('p');
      pGrade.className = 'pStudent';
      pGrade.textContent = 'پایه : ' + student.AgeSchool;

      const pClass = document.createElement('p');
      pClass.className = 'pStudent';
      pClass.textContent = 'نام کلاس : ' + student.ClassName;

      textDiv.appendChild(h1);
      textDiv.appendChild(pFather);
      textDiv.appendChild(pLibrary);
      textDiv.appendChild(pNational);
      textDiv.appendChild(pMobile);
      textDiv.appendChild(pGrade);
      textDiv.appendChild(pClass);

      div.appendChild(img);
      div.appendChild(textDiv);

      container.appendChild(div);
      console.log("Good");
      });
  })
  .catch(error => console.error('خطا در خواندن فایل JSON:', error));

}
Load();