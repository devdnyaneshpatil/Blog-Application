document.querySelector("#form").addEventListener("submit", checkAndEnterFun);
function checkAndEnterFun(event) {
  event.preventDefault();
  const payload = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#pass").value,
  };
  fetch("http://localhost:8080/users/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res.msg);
      if(res.msg=="please check your password"){
         document.querySelector("#pass").value="";
      }else if(res.msg=="Login Successfull"){   
        localStorage.setItem("blogToken", JSON.stringify(res.token));
        window.location.href = "../blogspage/blog.html";
      }else if(res.msg=="please register first"){
        window.location.href="signup.html"
      }else{
        window.location.href="login.html"
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
