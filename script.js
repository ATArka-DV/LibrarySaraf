const canvas = document.getElementById('neonRain');
const ctx = canvas.getContext('2d');
const audio = new Audio('Music.mp3');
audio.play();

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
  const New = new Date();
  const TimeB = New.getMinutes();
  if (TimeB == 1) {
    localStorage.setItem("UserMode", "False")
    alert("Exited !")
    location.reload();
  }

  const originalTitle = document.title;
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      document.title = "Back To My Page !"
    } else {
      document.title = originalTitle;
    }
  });

  if (!audio.played){
    audio.play();
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#00ffea';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#0008ffff';
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
try{
  SearchInput.addEventListener('input', function() {
    valuesearch = SearchInput.value;
    if (!valuesearch) {
      location.reload();
    } else {
      search();
    }
  });
}catch(error){
  console.log(error)
}

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

const SearchInputB = document.getElementById("SearchInputB");
function LoadB(){
  fetch('Books.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const container = document.getElementById('containerB');

      data.forEach(student => {
        const div = document.createElement('div');
        div.id = 'Elements';

        const textDiv = document.createElement('div');
        textDiv.className = 'StudentText';

        const textDiv2 = document.createElement('div');
        textDiv2.className = 'StudentText';

        const h1 = document.createElement('h1');
        h1.id = 'h1Student';
        h1.textContent = student.Name;

        const pJanre = document.createElement('p');
        pJanre.className = 'pStudent';
        pJanre.textContent = 'ژانر : ' + student.Janre;

        const pMaker = document.createElement('p');
        pMaker.className = 'pStudent';
        pMaker.textContent = 'نویسنده : ' + student.Maker;

        const pTranslator = document.createElement('p');
        pTranslator.className = 'pStudent';
        pTranslator.textContent = 'مترجم : ' + student.Translator;

        const pYearMake = document.createElement('p');
        pYearMake.className = 'pStudent';
        pYearMake.textContent = 'سال انتشار : ' + student.YearMake;

        const pAmanat = document.createElement('p');
        pAmanat.className = 'pStudent';
        pAmanat.textContent = 'امانت داده شده : ' + student.Amanat;

        const pAmanatDar = document.createElement('p');
        pAmanatDar.className = 'pStudent';
        pAmanatDar.textContent = 'به : ' + student.AmanatDar;

        const pCodeAmanat = document.createElement('p');
        pCodeAmanat.className = 'pStudent';
        pCodeAmanat.textContent = 'کد عضویت : ' + student.CodeAmanat;

        const pDate = document.createElement('p');
        pDate.className = 'pStudent';
        pDate.textContent = 'تاریخ : ' + student.Date;

        const pAddress = document.createElement('p');
        pAddress.className = 'pStudent';
        pAddress.textContent = 'آدرس : ' + student.Address;

        textDiv.appendChild(h1);
        textDiv.appendChild(pJanre);
        textDiv.appendChild(pMaker);
        textDiv.appendChild(pTranslator);
        textDiv.appendChild(pYearMake);

        
        textDiv2.appendChild(pAmanat);

        if (localStorage.getItem("UserMode") == "True"){
          textDiv2.appendChild(pAmanatDar);
          textDiv2.appendChild(pCodeAmanat);
          textDiv2.appendChild(pDate);
          textDiv2.appendChild(pAddress);
        }
        div.appendChild(textDiv2);
        div.appendChild(textDiv);

        container.appendChild(div);
        console.log("Good");
      });

    })
    .catch(error => console.error('خطا در خواندن فایل JSON:', error));
}

try{
  SearchInputB.addEventListener('input', function() {
    valuesearch = SearchInputB.value.trim();
    if (!valuesearch) {
      const container = document.getElementById('containerB');
      container.innerHTML = "";
      LoadB();
    } else {
      searchB();
    }
  });
}catch(error){
  console.log(error)
}
function searchB() {
    
  const searchTerm = SearchInputB.value;

  fetch('Books.json')
  .then(response => response.json())
  .then(data => {
    
    const container = document.getElementById('containerB');
    container.innerHTML = "";
    const sk = searchTerm;
    
    
    const filteredData = data.filter(student => 
      student.Name.toLowerCase().includes(sk.toLowerCase()) ||
      student.Janre.toLowerCase().includes(sk.toLowerCase()) ||
      student.CodeAmanat.toLowerCase().includes(sk.toLowerCase())
    );
    console.log(filteredData);
    
    filteredData.forEach(student => {
      const div = document.createElement('div');
      div.id = 'Elements';
      
      const textDiv = document.createElement('div');
      textDiv.className = 'StudentText';
      
      const textDiv2 = document.createElement('div');
      textDiv2.className = 'StudentText';
      
      const h1 = document.createElement('h1');
      h1.id = 'h1Student';
      h1.textContent = student.Name;
      
      const pJanre = document.createElement('p');
      pJanre.className = 'pStudent';
      pJanre.textContent = 'ژانر : ' + student.Janre;
      
      const pMaker = document.createElement('p');
      pMaker.className = 'pStudent';
      pMaker.textContent = 'نویسنده : ' + student.Maker;
      
      const pTranslator = document.createElement('p');
      pTranslator.className = 'pStudent';
      pTranslator.textContent = 'مترجم : ' + student.Translator;
      
      const pYearMake = document.createElement('p');
      pYearMake.className = 'pStudent';
      pYearMake.textContent = 'سال انتشار : ' + student.YearMake;
      
      const pAmanat = document.createElement('p');
      pAmanat.className = 'pStudent';
      pAmanat.textContent = 'امانت داده شده : ' + student.Amanat;
      
      const pAmanatDar = document.createElement('p');
      pAmanatDar.className = 'pStudent';
      pAmanatDar.textContent = 'به : ' + student.AmanatDar;
      
      const pCodeAmanat = document.createElement('p');
      pCodeAmanat.className = 'pStudent';
      pCodeAmanat.textContent = 'کد عضویت : ' + student.CodeAmanat;
      
      const pDate = document.createElement('p');
      pDate.className = 'pStudent';
      pDate.textContent = 'تاریخ : ' + student.Date;
      
      const pAddress = document.createElement('p');
      pAddress.className = 'pStudent';
      pAddress.textContent = 'آدرس : ' + student.Address;
      
      textDiv.appendChild(h1);
      textDiv.appendChild(pJanre);
      textDiv.appendChild(pMaker);
      textDiv.appendChild(pTranslator);
      textDiv.appendChild(pYearMake);
      
      
      textDiv2.appendChild(pAmanat);
      
      if (localStorage.getItem("UserMode") == "True"){
        textDiv2.appendChild(pAmanatDar);
        textDiv2.appendChild(pCodeAmanat);
        textDiv2.appendChild(pDate);
        textDiv2.appendChild(pAddress);
      }
      div.appendChild(textDiv2);
      div.appendChild(textDiv);
      
      container.appendChild(div);
      console.log("Good");
    });
  })
  .catch(error => console.error('خطا در خواندن فایل JSON:', error));

}
LoadB();

function News() {
  const News = document.getElementById("News")
  fetch('Words.json')
  .then(response => response.json())
  .then(data => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomMessage = data[randomIndex];
    News.textContent = randomMessage;
  });
}
Window.Load(News());