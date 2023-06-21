const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let word = "";
let words = ['python','javascript','database','html','tailwind','reactjs','angular','swift','android','kotlin'];


const newWord = () => {
    let randomNum = Math.floor(Math.random() * words.length);
    let randomWord = words[randomNum];
    // console.log(randomWord.split("")); //converitng string to array
    return randomWord;
}

const scrambleLetters = (arr) => {
    for(let  i = arr.length-1; i>0; i--){
        let temp = arr[i];

        let j = Math.floor(Math.random() * (i+1));

        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');

        word = newWord();
        scrambledWord = scrambleLetters(word.split("")).join("");
        // console.log(scarmbledWord.join(""));

        msg.innerHTML = `Guess the word: ${scrambledWord}`;
    }
    else{
        let userInput = guess.value;
        if(userInput === word){
            // console.log('correct guess');
            play = false;
            msg.innerHTML = `Answer guessed correctly! The word is ${word}`;
            btn.innerHTML = "Start again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else{
            // console.log('incorrect guess');
            msg.innerHTML = `incorrect guess! Please try again: ${scrambledWord}`;
            guess.value = "";
        }
    }
});