const userWord = prompt("Enter a word to see if it is a pallindrome.");


function pallindrome (userWord){

    console.log(`Your word: ${userWord}`)

    let i = userWord.length - 1;
    let reversedWord = '';

    while (i >= 0){
        reversedWord += userWord[i];
        i--
    }
    
    console.log(`Your word backwards: ${reversedWord}`);

    if(reversedWord === userWord){
        console.log("This word is a pallindrome!")
    }else{
        console.log(`Nope, ${userWord} is not a pallindrome`)
    }
}

pallindrome(userWord)