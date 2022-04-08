
let wordList = [
    'pizza',
    'hello',
    'grass',
    'actor'
];

let random = Math.floor(Math.random() * 10);
let word = wordList[random];

console.log(word);

function check(attempt){
    let correctLetters = '';
    console.log('attempt'+attempt);
    let toCheck = document.getElementById('attempt' + attempt).value;

    console.log(toCheck);
    
    if (toCheck== word){


    }

    else{
        let pieces = toCheck.split('');
    }
}