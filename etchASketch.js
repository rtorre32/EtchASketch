
const canvasColor = "#FFFAFA";
const canvas = document.querySelector(".canvas");
const controls = document.querySelector(".controls");
const area = (canvas.clientHeight * canvas.clientWidth);
const slider = document.querySelector(".slider");
const sliderOutput = document.querySelector("output");

let total = slider.value;
let size = canvas.clientWidth / total;
console.log(size);

//Slider Input Handling
sliderOutput.innerHTML = slider.value;
slider.addEventListener("input", function(){
    sliderOutput.innerHTML = slider.value;
    total = slider.value;
})

canvas.style.background = canvasColor;
// controls.style.background = canvasColor;


//  27 28 256
for(let i = 0; i <total * total; i++){
    let pixel = document.createElement("div");
    pixel.style.flex = "auto";
    pixel.style.boxSizing = "border-box";
    pixel.style.border = "1px solid black";
    pixel.style.width = ""+size+"px";
    pixel.style.height = ""+size+"px";

    // pixel.addEventListener("mouseenter" = () =>{
    //     // pixel.background = "black";
    // })
    canvas.append(pixel);
}