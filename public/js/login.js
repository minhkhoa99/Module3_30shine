let apiLogin = "http://localhost:3000";
const form = document.getElementById("formlogin");
const btnLogin = document.querySelector(".btn-continue");
const btnLogout = document.querySelector(".btn-logout");
const message = document.querySelector(".message");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let telephone = form.tel.value;
  let password = form.passwordtel.value;
  if (
    telephone !== Number(telephone) &&
    telephone.length !== 10 &&
    telephone !== ""
  ) {
    message.innerHTML = `<div class = "alert alert-danger">Vui lòng nhập SĐT hợp lệ</div>`;
  } else if (
    telephone == "" ||
    password == "" ||
    (telephone == "" && password == "")
  ) {
    message.innerHTML = `<div class = "alert alert-danger">SĐT hoặc mật khẩu không được để trống</div>`;
  } else if (!telephone == "" || !password == "") {
    message.innerHTML = `<div class = "alert alert-danger">Số điện thoại hoặc mật khẩu không chính xác</div>`;
  }

  let data = {
    telephone,
    password,
  };

  fetch(apiLogin + "/", {
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
      if (data.status === "success") {
        message.innerHTML = `<div class = "alert alert-danger">Đăng nhập thành công</div>`;

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
