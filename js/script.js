function createCellElement(tagName, className){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    return cellElement;
}

function createNumberElement(tagName, className, number){
    const numberElement = document.createElement(tagName);
    numberElement.className = className;
    numberElement.innerHTML = number + 1;
    return numberElement;
}

const gridElement = document.getElementById("myGrid");

for (let i = 0; i < 100; i++){
    const setCell = createCellElement("div", "cell");

    const setCellNumber = createNumberElement("h2", "cellNumber", i);

    setCell.addEventListener("click", function(){
        setCell.classList.toggle("selected");

        console.log(i + 1)
    })

    gridElement.appendChild(setCell);

    setCell.appendChild(setCellNumber);

    console.log(i+1);

    console.log(document.getElementsByClassName("cellNumber"));
}

const playGameButton = document.getElementById("playButton");

//playGameButton.addEventListener("click", function(){
    //setCell.classList.remove("selected")
//})
