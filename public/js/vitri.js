let salon = document.getElementsByClassName("salon");
console.log(salon);
for (i = 0; i < salon.length; i++) {
  salon[i].addEventListener("click", function () {
    console.log(this.id);
    window.location.href = `/datlich?step=0&shopId=${this.id}`;
  });
}
