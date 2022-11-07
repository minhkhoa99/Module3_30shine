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
let api = "http://localhost:3000";
let tbody = document.getElementById("table-body-combo");
let form = document.getElementById("form-validate");

tbody.addEventListener("click", (e) => {
  console.log(e.target);

  if (
    e.target.classList.contains("update-icon") ||
    e.target.classList.contains("update-btn")
  ) {
    let idUpdate =
      e.target.classList[2].split("-")[1] ||
      e.target.parentElement.classList[2].split("-")[1];
    console.log(idUpdate);

    let tdChildList = e.target.classList.contains("update-icon")
      ? e.target.parentElement.parentElement.parentElement.parentElement
          .children
      : e.target.parentElement.parentElement.parentElement.children;
    console.log(tdChildList);
    let info = {
      comboid: tdChildList[0].innerHTML.trim(),
      imageUrl: tdChildList[1].innerHTML.trim(),
      title: tdChildList[2].innerHTML.trim(),
      description: tdChildList[3].innerHTML.trim(),
      price: tdChildList[4].innerHTML.trim(),
      imageStylist: tdChildList[5].innerHTML.trim(),
      nameStylist: tdChildList[6].innerHTML.trim(),
    };
    console.log(info);

    form.innerHTML = `
      <form class="row g-3" id="update-form">
      <h2 style="margin-top: 50px ;">Thêm mới Combo</h2>
      <div class="col-md-6">
          <label for="inputEmail4" class="form-label">comboid</label>
          <input type="text" class="form-control" value="${info.comboid}" name="comboid" id="inputEmail4">
      </div>
      <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Hình ảnh</label>
          <input type="text" class="form-control" value="${info.imageUrl}" name="imageUrl" id="inputPassword4">
      </div>
      <div class="col-6">
          <label for="inputAddress2" class="form-label">Tiêu đề</label>
          <input type="text" class="form-control" value="${info.title}" id="inputAddress2" name="title" placeholder="Nhập tiêu đề">
      </div>
      <div class="col-md-6">
          <label for="inputCity" class="form-label">Mô tả</label>
          <input type="text" class="form-control" value="${info.description}" name="description" placeholder="Nhập mô tả" id="inputCity">
      </div>
      <div class="col-md-6">
          <label for="inputCity" class="form-label">Giá</label>
          <input type="text" class="form-control" value="${info.price}" name="price" placeholder="Nhập mô tả" id="inputCity">
      </div>
      <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Stylist ảnh</label>
          <input type="text" class="form-control" value="${info.imageStylist}" name="imageStylist" id="inputPassword4">
      </div>
      <div class="col-md-6">
          <label for="inputCity" class="form-label">stylist</label>
          <input type="text" class="form-control" value="${info.nameStylist}" name="nameStylist" placeholder="Nhập mô tả" id="inputCity">
      </div>
      <div class="col-12">
          <button type="submit" class="btn btn-primary">Cập nhật Combo</button>
      </div>
  </form>`;
    let formUpdate = document.getElementById("update-form");
    if (formUpdate) {
      formUpdate.addEventListener("submit", (e) => {
        e.preventDefault();
        let updateInfo = {
          comboid: formUpdate.comboid.value,
          imageUrl: formUpdate.imageUrl.value,
          title: formUpdate.title.value,
          description: formUpdate.description.value,
          price: formUpdate.price.value,
          imgaeStylist: formUpdate.imageStylist.value,
          nameStylist: formUpdate.nameStylist.value,
        };
        console.log(updateInfo);
        fetch(api + `/hanh-trinh-toa-sang/${idUpdate}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.message);

            window.location.href = "/admin/hanh-trinh-toa-sang";
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
    // } else if (
    //   e.target.classList.contains("delete-icon") ||
    //   e.target.classList.contains("delete-btn")
    // ) {
    //   let id =
    //     e.target.classList[1].split("-")[1] ||
    //     e.target.parentElement.classList[1].split("-")[1];
    //   console.log(id);
    //   // fetch
    //   fetch(api + `/hanh-trinh-toa-sang/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       e.target.parentElement.parentElement.parentElement.parentElement.remove();
    //     });
  }
});
