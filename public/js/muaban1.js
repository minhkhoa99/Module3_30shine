let btnCong = document.getElementById("btn-cong");
let btnTru = document.getElementById("btn-tru");
let mediaNumber = document.getElementById("media-number");
let giaTien = document.getElementById("gia-tien");
let giaTri = mediaNumber.innerText;
let tienAo = document.getElementById("tienao");
let tienDo = document.getElementById("tiendo");
btnCong.onclick = function () {
  giaTri = `${Number(giaTri) + 1}`;
  mediaNumber.innerText = giaTri;
  giaTien.innerText = `${Number(tienAo.innerText) * Number(giaTri)}`;
  giaTien.style.fontWeight = 700;
  tienDo.innerText = giaTien.innerText;
  tienDo.style.fontWeight = 700;
};
btnTru.onclick = function () {
  giaTri = `${Number(giaTri) - 1}`;
  if (giaTri <= 0) {
    giaTri = 0;
    mediaNumber.innerText = giaTri;
    giaTien.innerText = 0;
    giaTien.style.fontWeight = 700;
    tienDo.innerText = giaTien.innerText;
    tienDo.style.fontWeight = 700;
  } else {
    mediaNumber.innerText = giaTri;
    giaTien.innerText = `${Number(tienAo.innerText) * Number(giaTri)}`;
    giaTien.style.fontWeight = 700;
    tienDo.innerText = giaTien.innerText;
    tienDo.style.fontWeight = 700;
  }
};
