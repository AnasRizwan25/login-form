let data = JSON.parse(localStorage.getItem('data')) || [];
let emailInput = false;
let passInput = false;


var isLogin = JSON.parse(localStorage.getItem("login"));
if (isLogin) {
  window.location.replace('../dashboard/index.html');
}

function loginForm(value, e) {

  let email = document.querySelector('#email-id');
  let pass = document.querySelector('#pass-id');

  if (value === 'email') {
    if (e.target.value.indexOf('@') === -1) {
      email.style.display = 'block';
      emailInput = false;
    } else {
      email.style.display = 'none';
      emailInput = true;
    }
  }
  if (value === 'password') {
    if (e.target.value.length < 10) {
      pass.style.display = 'block';
      passInput = false;
    } else {
      pass.style.display = 'none';
      passInput = true;
    }
  }
}

function hover(e) {
  e.target.style.cursor = 'pointer';
}

let flag = true;
function visiblePass(e) {

  let element = e.target.previousElementSibling;

  if (element.getAttribute('type') === 'password' && flag) {
    element.setAttribute('type', 'text');
    flag = false;
    return;
  }
  element.setAttribute('type', 'password');
  flag = true;

}


function searchData(email, password) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === email && data[i].password === password) {
      return data[i];
    }
  }
  return null;
}


function checkDate(e) {
  e.preventDefault();

  let emailValue = document.querySelector('#emailValue').value;
  let passValue = document.querySelector('#passValue').value;

  var isLogin = searchData(emailValue, passValue);
  
  if (isLogin) {
    console.log(isLogin);
    localStorage.setItem('login', JSON.stringify(isLogin));
    window.location.replace('../dashboard/index.html');
  }

}
