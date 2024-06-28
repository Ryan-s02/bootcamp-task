let userNumber = parseInt(prompt("Enter a number that is at least 3 digits long."));

while (userNumber < 100) {
    userNumber = parseInt(prompt("The number needs to be at least 3 digits long."))
}
// console.log(userNumber);

let userNumberString = userNumber.toString();


    let swappedNumber = '';
    for (let i = 0; i < userNumberString.length; i++) {
        if (i === 1) {
            //swap the second digit with the last index
            swappedNumber += userNumberString[userNumberString.length - 1]
        }else if (i === userNumberString.length - 1){
            //swap the last digit to the second index
            swappedNumber += userNumberString[1];
        }else{
            //keep the rest the same
            swappedNumber += userNumberString[i]
        }
    }
    console.log("User's number: ", userNumber)
    console.log("New number: ", swappedNumber)

