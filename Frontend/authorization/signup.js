document.querySelector("#form").addEventListener("submit", createAccFun);

function createAccFun(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email1").value;
  var pass = document.querySelector("#pass").value;
  var payload = {
    name: name,
    email: email,
    password: pass,
  };
  console.log(payload);
  if (name == "" || email == "" || pass == "") {
    alert("Please Provide correct Data");
  } else {
    fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.msg);
        if (res.msg == "new user has been added") {
          localStorage.setItem("blogToken", JSON.stringify(res.token));
          window.location.href = "../blogspage/blog.html";
        }
        console.log(res)
      })
      .catch((error) => {
         console.log(error)
         alert(error.message)
      });
  }
}
