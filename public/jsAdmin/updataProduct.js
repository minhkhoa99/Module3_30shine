const body = document.querySelector("body"),
  modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});

let updateBtn = document.getElementById("updatebtn");
let deleteBtn = document.getElementById("deletebtn");
let apiDelete = "http://localhost:3000";

let form = document.querySelector(".row");

updateBtn.addEventListener("click", (e) => {
  form.innerHTML = ` 
  <h2 style="margin-top: 50px ;">Cập nhật cửa hàng</h2>
  <form class="row g-3" method="PUTT" action="/admin/store?_method=PUT">

  <div class="col-md-6">
      <label for="inputEmail4" class="form-label">shopid</label>
      <input type="text" class="form-control" value ="<%shopList.userid%>" name="userid" id="inputEmail4">
  </div>
  <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Vị trí</label>
      <input type="text" class="form-control" value ="" name="location" id="inputPassword4">
  </div>
  <div class="col-6">
      <label for="inputAddress" class="form-label">ImageUrl</label>
      <input type="url" class="form-control" value ="" name="imageUrl" id="inputAddress" >
  </div>
  <div class="col-6">
      <label for="inputAddress2" class="form-label">Địa chỉ</label>
      <input type="text" class="form-control" value ="" name="address" id="inputAddress2">
  </div>
  <div class="col-md-6">
      <label for="inputCity" class="form-label">Mô tả</label>
      <input type="text" class="form-control" value ="" name="description"  id="inputCity">
  </div>
  <div class="col-12">
      <button type="submit" class="btn btn-primary">Cập nhật cửa hàng</button>
  </div>
</form>
`;
  fetch(apiDelete + "/admin/san-pham", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete
deleteBtn.addEventListener("click", (e) => {
  fetch(apiDelete + "/admin/san-pham", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message);
    });
});
