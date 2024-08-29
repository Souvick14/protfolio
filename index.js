document.getElementById("btn").addEventListener("mouseenter", function(e) {
    document.getElementById("hire").style.transition=" all 0.5s ease";
    document.getElementById("hire").style.color= "black";
    
    document.getElementById("cir1").style.transition=" all 0.5s ease";
    document.getElementById("cir1").style.width= "3vw";
    document.getElementById("cir1").style.height= "3vw";
    document.getElementById("cir1").style.backgroundColor= "#f5ae2b";
    document.getElementById("cir2").style.transition=" all 0.5s ease";
    document.getElementById("cir2").style.width= "6vw";
    document.getElementById("cir2").style.height= "6vw";
    document.getElementById("cir2").style.backgroundColor= "#f3ba52";
    document.getElementById("cir3").style.transition=" all 0.5s ease";
    document.getElementById("cir3").style.width= "9vw";
    document.getElementById("cir3").style.height= "9vw";
    document.getElementById("cir3").style.backgroundColor= "wheat";
})
document.getElementById("btn").addEventListener("mouseleave", function(e) {
    
    document.getElementById("hire").style.transition=" all 0.5s ease";
    document.getElementById("hire").style.color= "wheat";
    document.getElementById("cir1").style.transition=" all 0.5s ease";
    document.getElementById("cir1").style.width= "0vw";
    document.getElementById("cir1").style.height= "0vw";
    document.getElementById("cir1").style.backgroundColor= "#f5ae2b";
    document.getElementById("cir2").style.transition=" all 0.5s ease";
    document.getElementById("cir2").style.width= "0vw";
    document.getElementById("cir2").style.height= "0vw";
    document.getElementById("cir2").style.backgroundColor= "#f3ba52";
    document.getElementById("cir3").style.transition=" all 0.5s ease";
    document.getElementById("cir3").style.width= "0vw";
    document.getElementById("cir3").style.height= "0vw";
    document.getElementById("cir3").style.backgroundColor= "wheat";
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

