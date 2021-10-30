function showPassword() {
  console.log("show password");
  const pass_field = document.querySelector('.password');
  const show_btn = document.querySelector('.show');
  show_btn.addEventListener('click',function () {
    if (pass_field.type === "password"){
      pass_field.type = "text";
      show_btn.color ="#3498db";
      show_btn.innerHTML="<i class='fa fa-eye-slash'></i>";
    }else {
      pass_field.type = "password";
      show_btn.color = "#3498db";
      show_btn.innerHTML="<i class='fa fa-eye'></i>";
    }
  });
}
