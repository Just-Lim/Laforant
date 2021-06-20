let username = document.getElementById("username")
let password = document.getElementById("password")
let email = document.getElementById("email")
let nationality = document.getElementById("Nationality")
let dob = document.getElementById("DOB")
let form = document.getElementById("form-register")

form.addEventListener("submit", (e) => {

   e.preventDefault()

   let error_username = document.getElementById("error-username")
   if(username.value.length < 5){
      error_username.innerHTML = "Username must be at least more or equal than 5 character"
      return;
   }else if(username.value.length >= 5){
      error_username.innerHTML = " "
   }

   let error_email = document.getElementById("error-email")
   if(email.value.indexOf("@") == -1 && email.value.endsWith(".com") == false){
      error_email.innerHTML = "email must include (@) and ends with (.com)"
      return;
   }else if(email.value.indexOf("@") == 0 && email.value.endsWith(".com")== true){
      error_email.innerHTML = " "
   }

   let error_password = document.getElementById("error-password")
   if(password.value.length < 5){
      error_password.innerHTML = "Password must be more or equal than 5 character"
      return;
   }else if(password.value.length >= 5){
      error_password.innerHTML = " "
   }

   let error_dob = document.getElementById("error-dob")
   if(!dob.value){
      error_dob.innerHTML = "Please fill the date"
      return;
   }else if(dob.value){
      error_dob.innerHTML = " "
   }
   
   let error_nationality = document.getElementById("error-nationality")
   if(nationality.value == "Select"){
      error_nationality.innerHTML = "Please enter your nationality"
      return;
   }else if(dob.value != "Select"){
      error_nationality.innerHTML = " "
   }

   e.currentTarget.submit()

})