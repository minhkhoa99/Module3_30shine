/** @format */

console.log("hello");

const form = document.getElementById("form-signup");
const messages = document.querySelector(".message");
let api = "http://localhost:3000/";
// const [name, setName] = useState("");
// const [telephone, setTelephone] = useState("");
// const [password, setpassword] = useState("");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = form.name.value;
  let telephone = form.signuptel.value;
  let password = form.passwordsignup.value;
  if (!telephone) {
    if (
      telephone !== Number(telephone) &&
      telephone.length !== 10 &&
      telephone !== ""
    ) {
      messages.innerHTML = `<div class = "alert alert-danger">Vui lòng nhập SĐT hợp lệ</div>`;
    } else if (
      name == "" ||
      telephone == "" ||
      password == "" ||
      (telephone == "" && password == "" && name == "")
    ) {
      messages.innerHTML = `<div class = "alert alert-danger" >Tên hoặc SĐT hoặc mật khẩu không được để trống</div>`;
    }
  }
  let data = {
    name,
    telephone,
    password,
  };
  fetch(api + "signup", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.status == "success") {
        messages.innerHTML = `<div class = "alert alert-danger">${data.message}</div>`;

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
