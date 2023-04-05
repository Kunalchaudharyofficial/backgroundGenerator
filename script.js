var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gobody");


function setGrandient(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value + "," 
    + color2.value + ")";

    // to get linear gradident css code 

    css.textContent = body.style.background + ";";

}


color1.addEventListener("input", setGrandient); 

color2.addEventListener("input", setGrandient); 


// oninput="setGrandient() we can add this diretly in html input but issue is that it can take only one function 

