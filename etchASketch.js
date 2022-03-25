//------Constant Variables--------------------------
const canvasColor = "#FFFAFA";
const colorBlack = "#000000";
const canvas = document.querySelector(".canvas");
const controls = document.querySelector(".controls");
const area = (canvas.clientHeight * canvas.clientWidth);
const slider = document.querySelector(".slider");
const sliderOutput = document.querySelector("output");
const resetButton = document.querySelector(".reset");
const clearButton = document.querySelector("button.clear");
const rainbowButton = document.querySelector("button.rainbow");
const blackButton = document.querySelector("button.black");

//------------Variables----------------------
let cellColor = colorBlack;
let total = slider.value;
let size;
let random = 0; 

//---------------button handler---------------------
resetButton.addEventListener("click", () => {
    deleteGrid();
    createGrid();
})

clearButton.addEventListener("click", () => {
    clearGrid();
})

rainbowButton.addEventListener("click", () => {
    random = 1;
})

blackButton.addEventListener("click", () => {
    random = 0;
})


canvas.style.background = canvasColor;


//----------Slider Input Handling-----------------
sliderOutput.innerHTML = slider.value;
slider.addEventListener("input", function(){
    sliderOutput.innerHTML = slider.value;
    total = slider.value;
})




//----------Functions----------------------------------------
function clearGrid(){
    const cells = document.querySelectorAll("div.cell");
    cells.forEach(cell => cell.style.background = canvasColor);
}

function deleteGrid(){
    const cells = document.querySelectorAll("div.cell");
    cells.forEach(cell => canvas.removeChild(cell));
}

function getColor(random){
    if(!random){
        return colorBlack;
    }
    else{
        return randomColor();
    }
}

function randomColor(){
    return "rgb("+randomInt()+", "+randomInt()+", "+randomInt()+")";
}

function randomInt(){
    const min = 0;
    const max = 255;
    let value = min + Math.floor(Math.random() * (max - min + 1));
    return value;
}


function createGrid(){

    size = canvas.clientHeight / total;

    for(let i = 0; i <total * total; i++){
        let pixel = document.createElement("div");
        pixel.setAttribute("class", "cell");
        pixel.style.flex = "auto";
        pixel.style.boxSizing = "border-box";
        // pixel.style.border = "1px solid black";
        pixel.style.width = ""+size+"px";
        pixel.style.height = ""+size+"px";
    
        pixel.addEventListener("mouseenter", function(){
            pixel.style.background = getColor(random);
        })
        canvas.append(pixel);
    }
}

createGrid();