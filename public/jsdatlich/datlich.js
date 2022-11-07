let datlich = document.getElementById("vitri");
datlich.addEventListener("click", () => {
  window.location.href = "/datlich?step=1";
});

let datlich2 = document.getElementById("vitri2");
datlich2.addEventListener("click", () => {
  window.location.href = "/datlich?step=2";
});
let datlich3 = document.getElementById("vitri3");
datlich3.addEventListener("click", () => {
  window.location.href = "/datlich?step=3";
});

let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  window.location.href = "/hanh-trinh-toa-sang";
});
