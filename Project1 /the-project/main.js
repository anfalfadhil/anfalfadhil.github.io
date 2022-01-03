
// going to need two pages
// page one has a text box and a button for player one to inpt the word and the word should be kept hidden no one can see it
// after p1 adds the word and press the button it will take them to page two
//page two has four sections:
// 1- for the incorrect letters
// 2- for the correct letters
// 3- section for the spaceship
// 4- for the timer and the scores
//5- for p2 to enter the wrong letters

//section for p2 to enter the letters
// section one (the wrong letters) will have to put them next to each others on the screen in that section
// section two (the correct letters) will have boxes as many letters there are in the word
// when p2 enters a correct letter it should appear in the correct position
// when they are all filled p2 wins
// section three( the spaceship )
// should be able to add new piece for evey wrong letter p2 provide
// when all the pieces are added and the boxes for the correct word are not full p2 loos.
//section four (the timer)
// will have a timer
// score section for p1 and p2
// at the the scores will pop up and a message with the result
// and every thing will be empty for the next round



//////////////////

let picsArray = ['spaceship/0.jpg', 'spaceship/1.jpg', 'spaceship/1.jpg', 'spaceship/2.jpg', 'spaceship/3.jpg', 'spaceship/4.jpg', 'spaceship/5.jpg', 'spaceship/6.jpg', 'spaceship/7.jpg', 'spaceship/8.jpg', 'spaceship/9.jpg', 'spaceship/10.jpg', 'spaceship/11.jpg', 'spaceship/12.jpg', 'spaceship/13.jpg', 'spaceship/14.jpg', 'spaceship/15.jpg', 'spaceship/16.jpg', 'spaceship/17.jpg' ];
let img = document.createElement('img');
document.querySelector("body > div:nth-child(2) > div.spaceship").append(img);
img.src = 'spaceship/empty.jpg';
img.setAttribute('class', 'img');
let theWord ;
let isInput = true;
const checkInput = () => {
   if (document.getElementById("input-box").value === '' ){
        alert('please enter a word first');
         isInput = true;    
    } else {
        appendFuction;
    }
}


let secretLetters = [];
const appendFuction = () => {
    checkInput();
    let enteredWord = document.getElementById("input-box").value.toLowerCase();
    theWord = enteredWord;
    let lettersArray = enteredWord.split('');
    globalLettersArray= lettersArray;
    console.log(lettersArray)

    document.getElementById('input-box').value = '';
    document.querySelector(".first-container").style.visibility = "hidden";
    document.querySelector(".second-container").style.visibility = 'unset';
    for (let i = 0; i< lettersArray.length; i++) {
        let box = document.createElement('div');
        document.querySelector(".boxes").append(box);
        box.setAttribute('id', 'secret-letter');
        box.innerText = lettersArray[i];
        secretLetters.push(box);
      
        
    } 
} 

let enterButton = document.querySelector(".enter-button");
enterButton.onclick = appendFuction;

////////////////

let checkButton = document.querySelector(".p2-button");
let indexes = [];
let mistakesCounter = 0;
let revealedLetters = [];
let result = document.createElement('h1');
result.setAttribute('class', 'result');
document.querySelector(".third-container").append(result);

let endGame = (str) => {
    mistakesCounter = 0;
    indexes = [];
    globalLettersArray = [];
    checkButton.display = true;
    result.innerHTML = str;
    secretLetters= [];
    document.querySelector(".third-container").style.visibility = 'visible';
    document.querySelector(".first-container").style.visibility = 'hidden';
    document.querySelector(".second-container").style.visibility = 'hidden';
    document.querySelector(".wrong-letters").innerHTML = '';
    document.querySelector('.p2-input-box').innerHTML = '';
    document.querySelector('.boxes').innerHTML = '';
}

let checkEnd = () => {
    if ( globalLettersArray.every(element => revealedLetters.includes(element))) {
        endGame('Player Two Wins, The Spaceman is Safe. the word was "' + theWord +'"');
    } else if (mistakesCounter > 13) {
        endGame('Player One Wins, The Spaceman is Gone. the word was "' + theWord + '"');
    }
} 

let checkingFunction = () => {
    let enteredLetter = document.querySelector(".p2-input-box").value.toLowerCase();
        if (globalLettersArray.includes(enteredLetter)){
            let index = globalLettersArray.indexOf(enteredLetter);
// https://stackoverflow.com/questions/20798477/how-to-find-index-of-all-occurrences-of-element-in-array
                let getAllMatchingLetters = (array, letter) => {
                     i = -1;
                    while ((i = array.indexOf(letter, i+1)) != -1){
                        indexes.push(i);
                        revealedLetters.push(globalLettersArray[index]);
                    }
                    return indexes;  
                }
                 getAllMatchingLetters(globalLettersArray, enteredLetter);
                for( let i=0; i< indexes.length; i++) {
                    secretLetters[indexes[i]].style.color = 'white';
                    checkEnd();
                }  
        } else {
            img.src = 'spaceship/' + mistakesCounter +'.jpg'
            mistakesCounter ++; 
            document.querySelector(".wrong-letters").append(enteredLetter, ", ");
            checkEnd();
        }
    document.querySelector(".p2-input-box").value = '';  
}

const playAgainFunction = () => {
    mistakesCounter = 0;
    img.src = 'spaceship/empty.jpg';
    indexes = [];
    globalLettersArray = [];
    checkButton.display = true;
    document.querySelector(".third-container").style.visibility = 'hidden';
    document.querySelector(".first-container").style.visibility = 'unset';
    document.querySelector(".second-container").style.visibility = 'hidden';
    enterButton.onclick = appendFuction;
    checkButton.onclick = checkingFunction;
    document.querySelector(".boxes").innerHTML = '';
    document.querySelector(".wrong-letters").innerHTML = '';
}

checkButton.onclick = checkingFunction;
const playAgainButton = document.querySelector(".replay-button");
playAgainButton.onclick = playAgainFunction;






