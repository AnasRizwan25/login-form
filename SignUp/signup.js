var isLogin = JSON.parse(localStorage.getItem("login"));
if (isLogin) {
  window.location.replace('../dashboard/index.html');

}

let data = JSON.parse(localStorage.getItem('data')) || [];

let emailFlag = false;
let emailDoubleFlag = true;
let passFlag = false;
let nameFlag = false;
let genderFlag = false;


function validate(value, e) {
  let email = document.querySelector('#email-id');
  let name = document.querySelector('#name-id');
  let pass = document.querySelector('#pass-id');
  let gender = document.querySelector('#gender-id');


  if (value === 'email') {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value.indexOf('@') === -1) {
        email.style.display = 'block';
        emailFlag = false;
        return;
      }
      email.style.display = 'none';
      emailFlag = true;
    }
  }

  if (value === 'name') {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value.length < 8) {
        name.style.display = 'block';
        nameFlag = false;
        return;
      }
      name.style.display = 'none';
      nameFlag = true;
    }
  }

  if (value === 'password') {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value.length < 10) {
        pass.style.display = 'block';
        passFlag = false;
        return;
      }
      pass.style.display = 'none';
      passFlag = true;
    }
  }

  if (value === 'gender') {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value.toLowerCase().length === 4 && e.target.value.toLowerCase() === 'male') {
        gender.style.display = 'none';
        genderFlag = true;
        return;
      } if (e.target.value.toLowerCase().length === 6 && e.target.value.toLowerCase() === 'female') {
        gender.style.display = 'none';
        genderFlag = true;
        return;
      }
      gender.style.display = 'block';
      genderFlag = false;
    }
  }
}

function hover(e) {
  e.target.style.cursor = 'pointer';
}
function visiblePass(e) {

  let element = e.target.previousElementSibling;
  let flag = true;

  if (element.getAttribute('type') === 'password' && flag) {
    element.setAttribute('type', 'text');
    flag = false;
    return;
  }
  element.setAttribute('type', 'password');
  flag = true;

}
function formSubmit(e) {
  e.preventDefault();

  let passValue = document.querySelector('#passValue').value;
  let emailValue = document.querySelector('#emailValue').value;
  let nameValue = document.querySelector('#nameValue').value;
  let genderValue = document.querySelector('#genderValue').value.toLowerCase();
  let cityValue = document.querySelector('#cityValue').value;

  let emailCheck = document.querySelector('#email-id');
  emailCheck.style.display = 'none'; 


  for (let i = 0; i < data.length; i++) {
    if (emailValue === data[i].email) {
      emailCheck.innerText = 'Already used';
      emailCheck.style.display = 'block';
      emailDoubleFlag = false; 
      return; 
    }
    emailDoubleFlag = true;
  }


  if (emailFlag && nameFlag && genderFlag && passFlag && emailDoubleFlag) {
    data = [...data, {
      email: emailValue,
      name: nameValue,
      gender: genderValue,
      city: cityValue,
      password: passValue,
    }];
    localStorage.setItem('data', JSON.stringify(data));
    window.location.replace("../index.html");
  }
}
