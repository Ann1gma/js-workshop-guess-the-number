/**
 * Guess the number - workshop
 *
 * STEG 1
 * Sätt ett tal i en variabel.
 * Be användaren att gissa talet med hjälp av `prompt()`.
 * Om användarens gissning är fel, fråga efter en ny gissning.
 * Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.
 * Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * Slumpa talet (med hjälp av funktionen `getRandomNumber()` nedan) som
 * användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 */



// Get a random number between 1 and `max` (default 10)
const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

const numberX = getRandomNumber();
console.log(numberX);



//Variant nr 1:

/*
let guess = Number(prompt("Guess a number between 1 - 10. Enter 0 to quit"));

let counter = 0;

while(true){
        
    if (guess === numberX){
        counter++
        alert(`Congratulations! ${guess} is correct! It took you ${counter} guesses.`);
        break;

    } else if(guess === 0) {
         alert("Thank you for playing!");
         break;

    } else if (guess < numberX){
        guess = Number(prompt(`${guess} is too low. Try again!`));
        counter++;

    } else if (guess > numberX){
        guess = Number(prompt(`${guess} is too high. Try again!`));
        counter++;
    
    } else {
        guess = Number(prompt(`That's not a number! Try again!`));
        counter++;
    }
}
*/


//Variant 2:
let counter = 0;

while(true){
    let guess = Number(prompt("Guess a number between 1 - 10. Enter 0 to quit"));
    
        
    if (guess === numberX){
        counter++
        alert(`Congratulations! ${guess} is correct! It took you ${counter} guesses.`);
        break;

    } else if(guess === 0) {
         alert("Thank you for playing!");
         break;

    } else if (guess < numberX){
        alert(`${guess} is too low. Try again!`);
        counter++;

    } else if (guess > numberX){
        alert(`${guess} is too high. Try again!`);
        counter++;
    
    } else {
        alert(`That's not a number! Try again!`);
    }
}