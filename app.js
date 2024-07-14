let counter=0;
let randomNumbersList = [];
let limit=3;
let secretNumber= randomNumber(limit);

function assignTextElement (element, text){
    let textElement = document.querySelector(element);//Esto es un objeto
    textElement.innerHTML = text;
    return;
}

assignTextElement('h1', "Secret number game");
assignTextElement('p', "Choose a number between 1 and 10");

function randomNumber(limit){
    if(randomNumbersList.length==limit){
        assignTextElement('p', "You finished the game!");
        return null;
    }
    let number= Math.floor(Math.random()*limit)+1;
    if(randomNumbersList.includes(number)){
         return randomNumber(limit);
    }
    randomNumbersList.push(number);
    return number; 
}

function verifyAttempt(){
    let userNumber=parseInt(document.getElementById("userValue").value);
    //console.log(userNumber);
    //console.log(typeof(userNumber));
    //console.log(secretNumber);
    //console.log(typeof(secretNumber));
    counter++;
    if(userNumber===secretNumber){
        assignTextElement('p', `You got the answer right! It took you ${counter} ${(counter==1) ? "time" : "times"}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    }
    else if(userNumber<secretNumber)
        assignTextElement('p', "The number is bigger.");
    else
        assignTextElement('p', "The number is smaller.");
    cleanBox();
    return;
}

function cleanBox(){
    document.querySelector("#userValue").value='';
}

function restartGame(){
    counter=0;
    assignTextElement('p', "Choose a number between 1 and 10");
    secretNumber= randomNumber(limit);
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}



