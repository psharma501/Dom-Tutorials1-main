let form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
  let name = event.target.name.value;
  let email = event.target.email.value;

  var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

  userData.push({
    'name':name,
    'email':email
  })

  localStorage.setItem("userDetails",JSON.stringify(userData))
})