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

function generateRandomNumber(minimumNumber, maximumNumber){
    const randomNumber = Math.floor(Math.random() * (maximumNumber - minimumNumber +1) + minimumNumber);
    return randomNumber;
}

function generateUniqueNumbers(minNum, maxNum, elements){
    let myNumbers = [];
    if((maxNum - minNum) < elements){
        return [];
    }
    while(myNumbers.length < elements){
        const randomUniqueNumber = generateRandomNumber(minNum, maxNum);
        if(!myNumbers.includes(randomUniqueNumber)){
            myNumbers.push(randomUniqueNumber);
        }
    }
    //console.log(myNumbers);
    
    return myNumbers;
}

const gridElement = document.getElementById("myGrid");


function generateCells(){
    for (let i = 0; i < 100; i++){
        const setCell = createCellElement("div", "cell");
    
        const setCellNumber = createNumberElement("h2", "cellNumber", i);
    
        setCell.addEventListener("click", function(){
            setCell.classList.toggle("selected");
    
            console.log(i + 1)
        })
    
        gridElement.appendChild(setCell);
    
        setCell.appendChild(setCellNumber);
    
        //console.log(i+1);
    
        //console.log(document.getElementsByClassName("cellNumber"));  
    }
}

const playGameButton = document.getElementById("playButton");

playGameButton.addEventListener("click", function(){
    gridElement.innerHTML = ""

    gridElement.classList.remove("d-none")

    generateCells();

    console.log(generateUniqueNumbers(1, 100, 16));

    
})