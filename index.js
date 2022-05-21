// Code your solutions in this file
function writeCards(namesArray, suprise) {
    let message = []
    for (let i = 0; i < namesArray.length; i++) {
        message.push(`Thank you, ${namesArray[i]}, for the wonderful ${suprise} gift!`)
    }
 return message;
}

function countDown() {
    let countDown = 10;
        while (countDown > -1) {
            console.log(countDown--);
        }
    return countDown;
}