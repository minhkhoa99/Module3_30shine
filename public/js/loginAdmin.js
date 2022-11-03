let apiLogin = "http://localhost:3000";
const form = document.getElementById("form-login");
const btnLogin = document.querySelector(".btn-continue");
const btnLogout = document.querySelector(".btn-logout");
const message = document.querySelector(".message");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = form.name.value;
  let password = form.passwordsignin.value;
  if (name == "" || password == "" || (name == "" && password == "")) {
    message.innerHTML = `<div class = "alert alert-danger">Tên hoặc mật khẩu không được để trống</div>`;
  } else if (!name !== "" || !password !== "") {
    message.innerHTML = `<div class = "alert alert-danger">Tên hoặc mật khẩu không chính xác</div>`;
  }

  let data = {
    name,
    password,
  };

  fetch(apiLogin + "/admin/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        message.innerHTML = `<div class = "alert alert-danger">Đăng nhập thành công</div>`;

        setTimeout(() => {
          window.location.href = "/admin/dashboard";
        }, 1000);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
