let dark = document.getElementById("darkmode");
dark.addEventListener("click", function (e) {
  if (dark.value == "false") {
    darkk();
    dark.value = "true";
  } else {
    lightt();
    dark.value = "false";
  }
});
const lightt = () => {
  document.getElementById("nv1").style.backgroundColor = "#FFF1D7";
  document.body.style.backgroundColor = " all 0.5s ease";
  document.body.style.backgroundColor = "rgb(255, 241, 215)";
  document.body.style.color = "black";
  document.getElementById("darkmode").style.transition = " all 0.5s ease";
  document.getElementById("darkmode").style.backgroundColor = "rgb(3, 38, 94)";
  document.getElementById("darkmode").style.backgroundImage =
    "url(/image/icons8-moon-20.png)";
  document.getElementById("revealhire").style.transition = " all 0.5s ease";
  document.getElementById("revealhire").style.backgroundColor =
    "rgb(255, 185, 55)";
  document.getElementById("souvick2").style.transition = " all 0.5s ease";
  document.getElementById("souvick2").style.color = "rgba(0, 0, 0, 0.642)";
  document.getElementById("backi").transition = " all 0.5s ease";
  document.getElementById("devi").filter = " brightness(0)";
  let navc=document.getElementsByClassName("navelement1");
  for (let index = 0; index < navc.length; index++) {
    navc[index].style.color = "black";
    
  }
  document.getElementById("backi").src =
    "/image/starfield-artwork-5400x4333-11746.jpg";
  document.getElementById("shootingstar").style.display = "none";
  document.querySelectorAll(
    ".devim"
  )[0].innerHTML = `<img src="/image/image-removebg-preview.png" id="devi" alt="backimg">`;
  document.getElementById("moon").style.transition = "all 0.5s ease";

  document.getElementById("moon").style.top = "38vw";
  document.getElementById("moon").style.display = "none";
  document.getElementById("moon").style.left = "-58vw";
};
const darkk = () => {
  document.body.style.backgroundColor = " all 0.5s ease";
  document.body.style.backgroundColor = "rgb(0, 31, 42)";
  document.body.style.color = "#3484a4";
  document.getElementById("darkmode").style.transition = " all 0.5s ease";
  document.getElementById("darkmode").style.backgroundColor =
  "rgba(20, 111, 255, 0.58)";
  document.getElementById("darkmode").style.backgroundImage =
  "url(/image/icons8-sun-20.png)";
  document.getElementById("souvick2").style.transition = " all 0.5s ease";
  document.getElementById("souvick2").style.color = "rgba(135, 206, 235, 0.43)";
  document.getElementById("revealhire").style.backgroundColor =
  "rgb(0, 84, 140)";
  document.getElementById("backi").transition = " all 0.5s ease";
  document.getElementById("backi").src = "/image/night.jpg";
  document.getElementById("nv1").style.backgroundColor = "rgb(0, 31, 42)";
  document.getElementById("backi").filter = " brightness(0.1)";
  document.getElementById("devi").filter = " brightness(0.1)";
  document.getElementById("devi").src = "/image/image-removebg-preview2.png";
  document.getElementById("shootingstar").style.display = "block";
  document.getElementById("moon").style.transition = "all 0.5s ease";
  document.getElementById("moon").style.display = "block";
  document.querySelectorAll(
    ".devim"
  )[0].innerHTML = `<img src="/image/image-removebg-preview-dark.png" id="devi" alt="backimg">`;
  document.getElementById("moon").style.top = "14vw";
  document.getElementById("moon").style.left = "-33vw";
  let navc=document.getElementsByClassName("navelement1");
  for (let index = 0; index < navc.length; index++) {
    navc[index].style.color = "rgb(52, 132, 164)";
  }
};

document.getElementById("itro").addEventListener("click", function (e) {
  if (document.getElementById("souvick2").value == "false") {
    var elements = document.querySelectorAll(".fs");
    elements.forEach(function (element) {
      element.style.transition = "all 1s ease";
      element.style.transform = "rotateY(180deg)";
      element.style.opacity = "0";
      document.getElementById("l-1").style.transition = "all 1s ease";
      document.getElementById("l-1").style.transform = "translateX(0px)";
      document.getElementById("l-1").style.opacity = "1";
      document.getElementById("l-2").style.transition = "all 1s ease";
      document.getElementById("l-2").style.transform = "translateY(0px)";
      document.getElementById("l-2").style.opacity = "1";
      document.getElementById("moon").style.opacity = "0.5";
      // element.style.display = "none";
    });
    document.getElementById("itroduce").style.transition = "all 0.5s ease";
    document.getElementById("itroduce").style.transform = " rotateY(360deg)";
    document.getElementById("itroduce").style.opacity = "1";
    document.getElementById("souvick2").value = "true";
  } else {
    document.getElementById("souvick2").value = "false";
  }
  // document.getElementById("itroduce").style.display="block";
  setTimeout(function () {
    document.getElementById("cpluse").style.transition = "all 0.5s ease";
    document.getElementById("cpluse").style.transform = "translate(0px,0px)";
    document.getElementById("cpluse").style.opacity = "1";
    document.getElementById("binary").style.transition = "all 0.5s ease";
    document.getElementById("binary").style.transform = "translate(0px,0px)";
    document.getElementById("binary").style.opacity = "1";
    document.getElementById("c").style.transition = "all 0.5s ease";
    document.getElementById("c").style.transform = "translate(0px,0px)";
    document.getElementById("c").style.opacity = "1";
    document.getElementById("code1").style.transition = "all 0.5s ease";
    document.getElementById("code1").style.transform = "translate(0px,0px)";
    document.getElementById("code1").style.opacity = "1";
    document.getElementById("code2").style.transition = "all 0.5s ease";
    document.getElementById("code2").style.transform = "translate(0px,0px)";
    document.getElementById("code2").style.opacity = "1";
    document.getElementById("react").style.transition = "all 0.5s ease";
    document.getElementById("react").style.transform = "translate(0px,0px)";
    document.getElementById("react").style.opacity = "1";
    document.getElementById("filpaagin").style.transition = "all 0.5s ease";
    document.getElementById("filpaagin").style.transform = "translate(0px,0px)";
    document.getElementById("filpaagin").style.opacity = "1";
    document.getElementById("mysql").style.transition = "all 0.5s ease";
    document.getElementById("mysql").style.transform = "translate(0px,0px)";
    document.getElementById("mysql").style.opacity = "1";
    document.getElementById("py").style.transition = "all 0.5s ease";
    document.getElementById("py").style.transform = "translate(0px,0px)";
    document.getElementById("py").style.opacity = "1";
    document.getElementById("web").style.transition = "all 0.5s ease";
    document.getElementById("web").style.transform = "translate(0px,0px)";
    document.getElementById("web").style.opacity = "1";
    document.getElementById("js").style.transition = "all 0.5s ease";
    document.getElementById("js").style.transform = "translate(0px,0px)";
    document.getElementById("js").style.opacity = "1";
    document.getElementById("coding").style.transition = "all 0.5s ease";
    document.getElementById("coding").style.transform = "translate(0px,0px)";
    document.getElementById("coding").style.opacity = "1";
  }, 1000);
  setTimeout(function () {
    document.getElementById("cpluse").style.transition = "all 0.5s ease";
    document.getElementById("cpluse").style.transform = "rotateZ(25deg) ";
    document.getElementById("binary").style.transition = "all 0.5s ease";
    document.getElementById("binary").style.transform = "rotateZ(-25deg) ";
    document.getElementById("c").style.transition = "all 0.5s ease";
    document.getElementById("c").style.transform = "rotateZ(30deg) ";
    document.getElementById("code1").style.transition = "all 0.5s ease";
    document.getElementById("code1").style.transform = "rotateZ(-30deg) ";
    document.getElementById("code2").style.transition = "all 0.5s ease";
    document.getElementById("code2").style.transform = "rotateZ(-10deg) ";
    document.getElementById("filpaagin").style.transition = "all 0.5s ease";
    document.getElementById("filpaagin").style.transform = "rotateZ(20deg) ";
    document.getElementById("react").style.transition = "all 0.5s ease";
    document.getElementById("react").style.transform = "rotateZ(-10deg) ";
    document.getElementById("mysql").style.transition = "all 0.5s ease";
    document.getElementById("mysql").style.transform = "rotateZ(-10deg) ";
    document.getElementById("py").style.transition = "all 0.5s ease";
    document.getElementById("py").style.transform = "rotateZ(10deg) ";
    document.getElementById("web").style.transition = "all 0.5s ease";
    document.getElementById("web").style.transform = "rotateZ(10deg) ";
    document.getElementById("js").style.transition = "all 0.5s ease";
    document.getElementById("js").style.transform = "rotateZ(-25deg) ";
    document.getElementById("coding").style.transition = "all 0.5s ease";
    document.getElementById("coding").style.transform = "rotateZ(-25deg) ";
  }, 1000);
});

// // window.addEventListener('scroll',function(e){
// //     document.getElementById("first").style.transition="all 0.5s ease";
// //     document.getElementById("first").style.opacity="0";
// // })
// var prevScrollPos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;

//   // Scroll down
//   if (prevScrollPos < currentScrollPos) {
//     document.getElementById("first").classList.add("header-hidden");
//     document.getElementById("first").classList.remove("header-visible");
//   }
//   // Scroll up
//   else {
// document.getElementById("first").classList.add("header-visible");
//     document.getElementById("first").classList.remove("header-hidden");
//   }

//   prevScrollPos = currentScrollPos;
// };

// window.addEventListener('scroll', function() {
//   var scrollPosition = window.scrollY;
//   var windowHeight = window.innerHeight;
//   var firstElement = this.document.getElementById("first");
//   var secondElement = this.document.getElementById("second");
//   var thirdElement = this.document.getElementById("third");
//   var fourthElement = this.document.getElementById("forth");

//   firstElement.style.opacity = 1 - scrollPosition / (windowHeight/20);
//   secondElement.style.opacity = 1 - Math.abs(windowHeight - scrollPosition) / (windowHeight/4);
//   thirdElement.style.opacity = 1 - Math.abs(windowHeight * 2 - scrollPosition) / windowHeight;
//   fourthElement.style.opacity = scrollPosition / (windowHeight * 3);
// });
