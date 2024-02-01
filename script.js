let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    toggleBtn.classList.remove('custom-style');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
 }
 
 const disableDarkMode = () => {
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    toggleBtn.classList.add('custom-style');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
 }
  

if (darkMode === 'enabled') {
   enableDarkMode();
}

toggleBtn.onclick = (e) => {
   darkMode = localStorage.getItem('dark-mode');
   if (darkMode === 'disabled') {
      enableDarkMode();
   } else {
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');
let search = document.querySelector('.header .flex .search-form');
let sideBar = document.querySelector('.side-bar');

document.querySelector('#user-btn').onclick = () => {
   profile.classList.toggle('active');
   search.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
   search.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () => {
   profile.classList.remove('active');
   search.classList.remove('active');

   if (window.innerWidth < 1200) {
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
   container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
   container.classList.remove("right-panel-active");
});

function redirectToPage(page) {
   window.location.href = page;
}
function validateForm() {
    var password = document.getElementById("password").value;

    if (password.trim() === "") {
       alert("Please enter your password.");
       return false;
    }

    if (password !== "Mr-Ahmed12345Eng") {
       document.getElementById("error-message").innerText = "Incorrect password. Please try again.";
       return false;
    } else {

       document.getElementById("error-message").innerText = "";
    }

    return true;
 }

 function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("showPassword");

    if (showPasswordCheckbox.checked) {
       passwordInput.type = "text";
    } else {
       passwordInput.type = "password";
    }
 }

 function login() {
    if (validateForm()) {
       window.location.href = "first_look.html";
    }
 }
 