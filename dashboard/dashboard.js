var isLogin = JSON.parse(localStorage.getItem("login"));

function onOut(e){
  e.preventDefault();

  if(isLogin){
    localStorage.removeItem('login');
    window.location.replace("./index.html");
  }
  console.log(isLogin)
}