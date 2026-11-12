
const container = document.querySelector("#container");
const xBoxInput = document.querySelector("#xBoxCount");
const yBoxInput = document.querySelector("#yBoxCount");
const submitBtn = document.querySelector("#submitBtn");

let xBoxCount = 0;
let yBoxCount = 0;

submitBtn.addEventListener("click", () => {

    // remove the previous grid layout first before creating new one.
    container.replaceChildren();

    xBoxCount = +xBoxInput.value;
    yBoxCount = +yBoxInput.value;

    createGrid(xBoxCount, yBoxCount);
});


let createBlock = () => {
    let div = document.createElement("div");
    div.classList.add("gridBox");
    container.appendChild(div);
}

function createGrid(xCount, yCount){
    for(let i=0; i< xCount*yCount; i++){
        createBlock();
    }
}
