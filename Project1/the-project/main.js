console.log("I did it")
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

const appendFuction = () => {

let enteredWord = document.getElementById("input-box").value;
console.log(enteredWord);
let lettersArray =enteredWord.split('');
// lettersArray.push(newWord.split(''));
console.log(lettersArray);
console.log(lettersArray.length);

for (let i = 0; i< lettersArray.length; i++) {
    let box = document.createElement('div');
    document.querySelector('.boxes').append(box);
    box.innerText = lettersArray[i];
    // console.log(box);
}



}
let enterButton = document.querySelector("body > div.first-container > div > form > button");
console.log(enterButton);
enterButton.onclick = appendFuction;









