const canvasColor = "#FFFAFA";
const canvas = document.querySelector(".canvas");
const controls = document.querySelector(".controls");
const area = (canvas.clientHeight * canvas.clientWidth);

let size = 16;

canvas.style.background = canvasColor;
// controls.style.background = canvasColor;


//  27 28 256
for(let i = 0; i <756; i++){
    let pixel = document.createElement("div");
    pixel.style.flex = "1 1 auto";
    pixel.style.border = "1px solid black";
    pixel.style.width = "16px";
    pixel.style.height = "16px";
    canvas.append(pixel);
}