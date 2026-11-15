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

    if(xBoxCount>100 || xBoxCount<=0){
        alert("Input must be between 1-100");
    } else{
        
        createGrid(xBoxCount);

        let opacity = 0;
        container.addEventListener("mouseover", (event) => {
          let rRandom = Math.floor(Math.random() * 255);
          let gRandom = Math.floor(Math.random() * 255);
          let bRandom = Math.floor(Math.random() * 255);
          event.target.style.backgroundColor = `rgb(${rRandom}, ${gRandom}, ${bRandom}, ${opacity}%)`;
          opacity += 10;
        });
    }
    
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

