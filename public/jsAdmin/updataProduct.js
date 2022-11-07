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

let tbody = document.getElementById("table-body");
let apiDelete = "http://localhost:3000";

let form = document.querySelector(".form-validate");

// updateBtn.addEventListener("click", (e) => {
//   let idUpdate = e.target.parentElement.classList[1].split("-")[1];
//   let tdChildList =
//     e.target.parentElement.parentElement.parentElement.parentElement.children;
//   console.log(tdChildList);
//   let info = {
//     userid: tdChildList[0].innerHTML.trim(),
//     location: tdChildList[1].innerHTML.trim(),
//     imageUrl: tdChildList[2].innerHTML.trim(),
//     address: tdChildList[3].innerHTML.trim(),
//     description: tdChildList[4].innerHTML.trim(),
//   };
//   console.log(info);
//   form.innerHTML = `
//   <h2 style="margin-top: 50px ;">Cập nhật cửa hàng</h2>
//   <form class="row g-3" id="update-form">

//   <div class="col-md-6">
//       <label for="inputEmail4" class="form-label">shopid</label>
//       <input type="text" class="form-control" value ="${info.userid}" name="userid" id="inputEmail4">
//   </div>
//   <div class="col-md-6">
//       <label for="inputPassword4" class="form-label">Vị trí</label>
//       <input type="text" class="form-control" value ="${info.location}" name="location" id="inputPassword4">
//   </div>
//   <div class="col-6">
//       <label for="inputAddress" class="form-label">ImageUrl</label>
//       <input type="url" class="form-control" value ="${info.imageUrl}" name="imageUrl" id="inputAddress" >
//   </div>
//   <div class="col-6">
//       <label for="inputAddress2" class="form-label">Địa chỉ</label>
//       <input type="text" class="form-control" value ="${info.address}" name="address" id="inputAddress2">
//   </div>
//   <div class="col-md-6">
//       <label for="inputCity" class="form-label">Mô tả</label>
//       <input type="text" class="form-control" value ="${info.description}" name="description"  id="inputCity">
//   </div>
//   <div class="col-12">
//       <button type="submit" class="btn btn-primary">Cập nhật cửa hàng</button>
//   </div>
// </form>
// `;

//   let formUpdate = document.getElementById("update-form");
//   if (formUpdate) {
//     formUpdate.addEventListener("submit", (e) => {
//       e.preventDefault();
//       let updateInfo = {
//         userid: formUpdate.userid.value,
//         location: formUpdate.location.value,
//         imageUrl: formUpdate.imageUrl.value,
//         address: formUpdate.address.value,
//         description: formUpdate.description.value,
//       };
//       console.log(updateInfo);
//       fetch(apiDelete + `/admin/san-pham/${idUpdate}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updateInfo),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//       console.log("heeheheh");
//     });
//   }
// });

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
      userid: tdChildList[0].innerHTML.trim(),
      location: tdChildList[1].innerHTML.trim(),
      imageUrl: tdChildList[2].innerHTML.trim(),
      address: tdChildList[3].innerHTML.trim(),
      description: tdChildList[4].innerHTML.trim(),
    };
    console.log(info);

    form.innerHTML = `
      <h2 style="margin-top: 50px ;">Cập nhật cửa hàng</h2>
      <form class="row g-3" id="update-form">

      <div class="col-md-6">
          <label for="inputEmail4" class="form-label">shopid</label>
          <input type="text" class="form-control" value ="${info.userid}" name="userid" id="inputEmail4">
      </div>
      <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Vị trí</label>
          <input type="text" class="form-control" value ="${info.location}" name="location" id="inputPassword4">
      </div>
      <div class="col-6">
          <label for="inputAddress" class="form-label">ImageUrl</label>
          <input type="url" class="form-control" value ="${info.imageUrl}" name="imageUrl" id="inputAddress" >
      </div>
      <div class="col-6">
          <label for="inputAddress2" class="form-label">Địa chỉ</label>
          <input type="text" class="form-control" value ="${info.address}" name="address" id="inputAddress2">
      </div>
      <div class="col-md-6">
          <label for="inputCity" class="form-label">Mô tả</label>
          <input type="text" class="form-control" value ="${info.description}" name="description"  id="inputCity">
      </div>
      <div class="col-12">
          <button type="submit" class="btn btn-primary">Cập nhật cửa hàng</button>
      </div>
    </form>
    `;
    let formUpdate = document.getElementById("update-form");
    if (formUpdate) {
      formUpdate.addEventListener("submit", (e) => {
        e.preventDefault();
        let updateInfo = {
          userid: formUpdate.userid.value,
          location: formUpdate.location.value,
          imageUrl: formUpdate.imageUrl.value,
          address: formUpdate.address.value,
          description: formUpdate.description.value,
        };
        console.log(updateInfo);
        fetch(apiDelete + `/admin/san-pham/${idUpdate}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Hello world");
            window.location.href = "/admin/san-pham";
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  } else if (
    e.target.classList.contains("delete-icon") ||
    e.target.classList.contains("delete-btn")
  ) {
    let id =
      e.target.classList[1].split("-")[1] ||
      e.target.parentElement.classList[1].split("-")[1];
    console.log(id);
    // fetch
    fetch(apiDelete + `/admin/san-pham/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
      });
  }
});
