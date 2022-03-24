const canvasColor = "#FFFAFA";
const canvas = document.querySelector(".canvas");
const controls = document.querySelector(".controls");

canvas.style.background = canvasColor;
// controls.style.background = canvasColor;

console.log(canvas.clientWidth);
console.log(canvas.clientHeight);

for(let i = 0; i < 500 * 500; i++){
    let pixel = document.createElement("div");
    pixel.style.border = "1px solid black";
    pixel.style.width = "64px";
    pixel.style.height = "64px";

    canvas.append(pixel);
}