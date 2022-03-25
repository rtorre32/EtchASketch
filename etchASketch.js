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

//------------Variables----------------------
let cellColor = colorBlack;
let total = slider.value;
let size;

//---------------button handler---------------------
resetButton.addEventListener("click", () => {
    deleteGrid();
    createGrid();
})

clearButton.addEventListener("click", () => {
    clearGrid();
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
            pixel.style.background = cellColor;
        })
        canvas.append(pixel);
    }
}

createGrid();