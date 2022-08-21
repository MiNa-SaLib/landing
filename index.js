let nav = document.querySelector("#nav");
let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountains3 = document.querySelector("#mountains3");
let mountains4 = document.querySelector("#mountains4");
let river = document.querySelector("#river");
let boat = document.querySelector("#boat");
let menue = document.querySelector(".fa-bars");
let ul = document.querySelector("nav ul");
let pInMain = document.querySelector(".main p");
let aInUl = document.querySelectorAll("ul a");
window.onscroll = function () {
  let val = scrollY;
  stars.style.left = val + "px";
  moon.style.top = val * 3 + "px";
  mountains3.style.top = val * 1.5 + "px";
  mountains4.style.top = val / 2 + "px";
  // console.log(val);
  if (val >= 154) {
    document.styleSheets[0].cssRules[1].style.backgroundColor = "#2e3375";
    document.styleSheets[0].cssRules[4].style.backgroundColor =
      "rgb(46 51 117 / 49%)";
    // console.log(document.styleSheets[0].cssRules[1].style[0]);
  }
  if (val > 700) {
    document.styleSheets[0].cssRules[1].style.backgroundColor = "#2e3375";
    document.styleSheets[0].cssRules[4].style.backgroundColor =
      "rgb(46 51 117 )";
    // console.log(document.styleSheets[0].cssRules[1].style[0]);
  }
  if (val < 154) {
    document.styleSheets[0].cssRules[1].style.backgroundColor = "#070107";
    document.styleSheets[0].cssRules[4].style.backgroundColor = "#070107";

    // document.styleSheets[0].cssRules[4].style. = "#070107";
    // console.log(document.styleSheets[0].cssRules[1].style[0]);
  }

  river.style.top = val + "px";
  boat.style.top = val + "px";
  boat.style.left = val + "px";
  pInMain.style.cssText = `font-size:${val}px;`;
  if (val >= 70) {
    pInMain.style.cssText = `font-size:70px; position: fixed;`;
  }
  if (val >= 180) {
    pInMain.style.zIndex = `-1`;
  }
  console.log(val);
};

document.addEventListener("click", function (e) {
  if (e.target.className === "fa-solid fa-bars") {
    ul.classList.toggle("visible");
  } else {
    ul.classList.remove("visible");
  }
});
// menue.addEventListener("click", function () {
//   ul.classList.toggle("visible");
// });
aInUl.forEach(function (e) {
  e.addEventListener("click", function () {
    aInUl.forEach(function (e) {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});
