// Select elements with DOM Manipulation
let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let nothingButton = document.getElementById("nothing-button");

let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");
let nothingDiv = document.getElementById("nothing-div");

let pCount = document.getElementById("p-count");
let imgCount = document.getElementById("img-count");
let nothingCount = document.getElementById("nothing-count");

let pCounter = 0;
let imgCounter = 0;
let nothingCounter = 0;


// Function to add Text+Stylize
function addText(){

    // Update counter text for pCount
    pCounter++
    pCount.innerText = "pCount: " + pCounter;

    // Show/Hide each of the Div's to prevent overlap
    imgDiv.style.display = "none";
    nothingDiv.style.display = "none";
    pDiv.style.display = "block"; //Display 

    // Create a new p element
    let newPTag = document.createElement("p")

    // Add style to the text
    newPTag.innerText = "Hot chocolate is bad today"
    newPTag.style.backgroundColor = "black";
    newPTag.style.padding = "10px";
    newPTag.style.color = "white";

    // Add the newPTag to the imgDiv
    pDiv.appendChild(newPTag);
}

// FUnction to add new Image
function addImage(){

     // Update counter text for imgCount
    imgCounter++
    imgCount.innerText = "imgCount: " + imgCounter;

    // Show/Hide each of the Div's to prevent overlap
    pDiv.style.display = "none";
    nothingDiv.style.display = "none";
    imgDiv.style.display = "block"; //Display 

    // Create a new img element
    let newImgTag = document.createElement("img");

    // Add source+style to the Image
    newImgTag.src = "pikachu.png";
    newImgTag.style.width = "50px";
    newImgTag.style.height = "50px";

    // Add the new img to the imgDiv
    imgDiv.appendChild(newImgTag);
}


function doNothing(){
    nothingCounter++
    nothingCount.innerText = "nothingCount: " + nothingCounter;

    pDiv.style.display = "none";
    imgDiv.style.display = "none";
    nothingDiv.style.display = "block";
}

// Event Listener to hear for clicks
pButton.addEventListener("click", addText)

// Event listener to hear for clicks
imgButton.addEventListener("click", addImage)

// Event listener to hear for clicks
nothingButton.addEventListener("click", doNothing);