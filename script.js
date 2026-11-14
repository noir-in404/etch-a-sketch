const container = document.querySelector("#container");
const xBoxInput = document.querySelector("#xBoxCount");
const submitBtn = document.querySelector("#submitBtn");
const gridBox = document.querySelector(".gridBox");

const containerWidth = 500; // 500px in css

let xBoxCount = 0;

submitBtn.addEventListener("click", () => {
    
    // remove the previous grid layout first before creating new one.
    container.replaceChildren();

    xBoxCount = +xBoxInput.value;
    // yBoxCount = +yBoxInput.value;
    
    createGrid(xBoxCount);
    
    container.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "blue";
    })
});



function createBlock() {
    let div = document.createElement("div");
    div.classList.add("gridBox");
    container.appendChild(div);
    div.style.width = `${containerWidth/xBoxCount}px`;
    div.style.height = `${containerWidth/xBoxCount}px`;
}

function createGrid(xCount){
    for(let i=0; i< xCount*xCount; i++){
        createBlock();
    }
}