let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");




let btnRegister = document.getElementById("register")
btnRegister.addEventListener("click", saveDate)

function saveDate() {
   if (inputEmail.value == localStorage.getItem('nameEmail')) {
   return  Swal.fire({
         title:'Ya te encuentras registrado',
         text:'Este email ya se encuentra en uso.',
         icon:'error',
         confirmButtonText:'Confirmar'
      }) ;
/*     return   alert("Ya te encuentas registrado");  */

   }
   else
   localStorage.setItem('name', inputName.value)
      localStorage.setItem('nameEmail', inputEmail.value)
   localStorage.setItem('password', inputPassword.value)
   Swal.fire({
      title:'Usuario creado exitosamente',
      text:'Ya puedes iniciar sesión con tu usuario.',
      icon:'success',
      confirmButtonText:'Confirmar'
   })
/*    alert("Registro exitoso, inicia sesion con tus datos") */
}



let btnLogin = document.getElementById("login")
btnLogin.addEventListener("click", checkLogin)

function checkLogin() {
   if (inputEmail.value == localStorage.getItem('nameEmail') && inputName.value==localStorage.getItem('name')&& inputPassword.value==localStorage.getItem('password')) {
      /* alert('Redirigiendo...') */
      Swal.fire({
         title:'Redirigiendo...',
         text:'Aguarde...',
         icon:'info'
         
      })
      location.href = "./index.html";


   }
   else
   return Swal.fire({
      title:'Email sin registrar',
      text:'Este email no se encuentra en nuestra base de datos.',
      icon:'question',
      confirmButtonText:'Confirmar'
   })
/*       alert('Email sin registrar') */
}



let btnGuest = document.getElementById("invitado")
btnGuest.addEventListener("click", guest)
function guest() {
   location.href = "./index.html";

}