let myImg = document.querySelector(".myImg");
let jsImg = document.querySelector("#jsImg");

let saturate = document.querySelector("#saturate");
let contrast = document.querySelector("#contrast");
let brightness = document.querySelector("#brightness");
let sepia = document.querySelector("#sepia");
let grayscale = document.querySelector("#grayscale");
let blur = document.querySelector("#blur");
let hueRotate = document.querySelector("#hue-rotate");

let myfile = document.querySelector("#myfile");
let download = document.querySelector("#download");
let rest = document.querySelector("#rest");
let myImgLabel = document.querySelector(".myImg label ");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

rest.onclick = function () {
  resetValue();
};

function resetValue() {
  jsImg.style.filter = `none`;

  saturate.value = `100`;
  contrast.value = `100`;
  brightness.value = `100`;
  sepia.value = `0`;
  grayscale.value = `0`;
  blur.value = `0`;
  hueRotate.value = `0`;
}

window.onload = function () {
  jsImg.style.display = "none";
  download.style.display = "none";
  rest.style.display = "none";
};
myfile.onchange = function () {
  resetValue();
  jsImg.style.display = "block";
  download.style.display = "block";
  rest.style.display = "block";
  myImgLabel.style.animationName = "dd";
  canvas.style.boxShadow = "3px 4px 20px 4px  rgb(50, 50, 50)";

  let file = new FileReader();
  file.readAsDataURL(myfile.files[0]);
  file.onload = function () {
    jsImg.src = file.result;
  };
  jsImg.onload = function () {
    canvas.width = jsImg.width;
    canvas.height = jsImg.height;
    ctx.drawImage(jsImg, 0, 0, canvas.width, canvas.height);
    jsImg.style.display = "none";
  };
};

let filters = document.querySelectorAll("ul li input");

filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)  
    `;

    ctx.drawImage(jsImg, 0, 0, canvas.width, canvas.height);
  });
});

download.onclick = function () {
  download.href = canvas.toDataURL();
};
