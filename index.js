document.getElementById("btn").addEventListener("mouseenter", function(e) {
    document.getElementById("hire").style.transition=" all 0.5s ease";
    document.getElementById("cir1").style.transition=" all 0.5s ease";
    document.getElementById("cir1").style.width= "3vw";
    document.getElementById("cir1").style.height= "3vw";
    document.getElementById("cir2").style.transition=" all 0.5s ease";
    document.getElementById("cir2").style.width= "6vw";
    document.getElementById("cir2").style.height= "6vw";
    document.getElementById("cir3").style.transition=" all 0.5s ease";
    document.getElementById("cir3").style.width= "9vw";
    document.getElementById("cir3").style.height= "9vw";
})
document.getElementById("btn").addEventListener("mouseleave", function(e) {
    
    document.getElementById("hire").style.transition=" all 0.5s ease";
    document.getElementById("cir1").style.transition=" all 0.5s ease";
    document.getElementById("cir1").style.width= "0vw";
    document.getElementById("cir1").style.height= "0vw";
    document.getElementById("cir2").style.transition=" all 0.5s ease";
    document.getElementById("cir2").style.width= "0vw";
    document.getElementById("cir2").style.height= "0vw";
    document.getElementById("cir3").style.transition=" all 0.5s ease";
    document.getElementById("cir3").style.width= "0vw";
    document.getElementById("cir3").style.height= "0vw";
})
document.getElementById("filpaagin").addEventListener("mouseenter", function(e) {
    document.getElementById("filp1").style.transition=" all 0.5s ease";
    document.getElementById("cirfilp1").style.width= "3vw";
    document.getElementById("cirfilp1").style.transition=" all 0.5s ease";
    document.getElementById("cirfilp1").style.height= "3vw";
    document.getElementById("cirfilp2").style.transition=" all 0.5s ease";
    document.getElementById("cirfilp2").style.width= "6vw";
    document.getElementById("cirfilp2").style.height= "6vw";
    document.getElementById("cirfilp3").style.transition=" all 0.5s ease";
    document.getElementById("cirfilp3").style.width= "9vw";
    document.getElementById("cirfilp3").style.height= "9vw";
})
document.getElementById("filpaagin").addEventListener("mouseleave", function(e) {
    
    document.getElementById("filp1").style.transition=" all 0.5s ease";
    document.getElementById("cirfilp1").style.transition=" all 0.5s ease";
    document.getElementById("cirfilp1").style.width= "0vw";
    document.getElementById("cirfilp1").style.height= "0vw";
    document.getElementById("cirfilp2").style.transition=" all 0.5s ease";
    document.getElementById("cirfilp2").style.width= "0vw";
    document.getElementById("cirfilp2").style.height= "0vw";
    document.getElementById("cirfilp3").style.transition=" all 0.5s ease";
    document.getElementById("cirfilp3").style.width= "0vw";
    document.getElementById("cirfilp3").style.height= "0vw";
})
let button=document.getElementById("btn");
button.addEventListener("click",function(e) {
    let reveal = document.getElementById("revealhire");
    if(reveal.style.width=="9vw"){
        document.getElementById("revealhire").style.transition=" all 0.5s ease";
        reveal.style.width="17vw";
    }else{
        document.getElementById("revealhire").style.transition=" all 0.5s ease";
        reveal.style.width="9vw";
    }
})


document.getElementById("mail").addEventListener("click",function(e) {
    window.location.href="mailto:souvickroy200212@gmail.com";
});
document.getElementById("cv").addEventListener("click",function(e) {
    // window.location.href="/pdf/Souvick_Roy_B.Tech_Fresher_Resume.pdf";
    window.open("/pdf/Souvick_Roy_B.Tech_Fresher_Resume.pdf")
});
