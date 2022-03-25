
const canvasColor = "#FFFAFA";
const canvas = document.querySelector(".canvas");
const controls = document.querySelector(".controls");
const area = (canvas.clientHeight * canvas.clientWidth);
const slider = document.querySelector(".slider");
const sliderOutput = document.querySelector("output");

let total = slider.value;

//Slider Input Handling
sliderOutput.innerHTML = slider.value;
slider.addEventListener("input", function(){
    sliderOutput.innerHTML = slider.value;
})

//

let size = 16;

canvas.style.background = canvasColor;
// controls.style.background = canvasColor;


//  27 28 256
for(let i = 0; i <756; i++){
    let pixel = document.createElement("div");
    pixel.style.flex = "1 1 auto";
    pixel.style.border = "1px solid black";
    pixel.style.width = ""+size+"px";
    pixel.style.height = ""+size+"px";
    canvas.append(pixel);
}