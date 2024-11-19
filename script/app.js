let data = JSON.parse(localStorage.getItem('data')) || [];

let emailFlag = false;
let passFlag = false;
let nameFlag = false;
let genderFlag = false;

let emailInput = false;
let passInput = false;


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
  let genderValue = document.querySelector('#genderValue').value;
  let cityValue = document.querySelector('#cityValue').value;

  if (emailFlag && nameFlag && genderFlag && passFlag) {
    data = [...data, {
      emailValue, nameValue, genderValue, cityValue, passValue,
    }]
    console.log(data);

    localStorage.setItem('data', JSON.stringify(data));
  }
}



function loginForm(value, e) {

  let email = document.querySelector('#email-id');
  let pass = document.querySelector('#pass-id');

  if (value === 'email') {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value.indexOf('@') === -1) {
        email.style.display = 'block';
        emailInput = false;
        return;
      }
      email.style.display = 'none';
      emailInput = true;
    }
  }
  if (value === 'password') {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value.length < 10) {
        pass.style.display = 'block';
        passInput = false;
        return;
      }
      pass.style.display = 'none';
      passInput = true;
    }
  }
}

function checkDate(e) {
  e.preventDefault();

  let emailValue = document.querySelector('#emailValue').value;
  let passValue = document.querySelector('#passValue').value;

  if (emailInput && passInput) {
    for (let i = 0; i < data.length; i++) {
      let value = data[i];
      if (value.emailValue === emailValue && value.passValue === passValue) {
        alert('Data found');
        return;
      }
      alert('data not found');
    }

  }


}