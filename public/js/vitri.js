let salon = document.getElementsByClassName("salon");
console.log(salon);
for (i = 0; i < salon.length; i++) {
  salon[i].addEventListener("click", () => {
    console.log("a");
    window.location.href = "/datlich?step=0";
  });
}
