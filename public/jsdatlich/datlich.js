let datlich = document.getElementById("vitri");
datlich.addEventListener("click", () => {
  window.location.href = "/datlich?step=1";
});

let datlich2 = document.getElementById("vitri2");
datlich2.addEventListener("click", () => {
  let shopId = window.location.href.split("?")[1].split("&")[1];
  console.log(shopId);
  window.location.href = `?step=2&${shopId}`;
});
// let datlich3 = document.getElementById("vitri3");
// datlich3.addEventListener("click", () => {
//   let shopId = window.location.href.split("?")[1].split("&")[1];
//   console.log(shopId);
//   window.location.href = `?step=3&${shopId}`;
// });

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
  let salonAddress = document
    .getElementsByClassName("content")[0]
    .innerHTML.trim();
  let salonService = document
    .getElementsByClassName("content-service")[0]
    .innerHTML.trim();
  let styList = document.getElementsByClassName("stylist")[0].innerHTML.trim();
  let api = "http://localhost:3000";

  let info = {
    salon: salonAddress,
    combo: salonService,
    styList: styList,
  };
  fetch(api + "/push", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  }).then((data) => {
    window.location.href = "/hanh-trinh-toa-sang";
  });
});
