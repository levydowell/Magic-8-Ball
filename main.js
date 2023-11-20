var userName = "Jane";
var userQuestion = "Will I ever be rich?";
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = ""

if (userName !== "") {
    console.log(`Hello, ${userName}`)
} else {
    console.log("Hello")
}

console.log(`Question: ${userQuestion}`)

if (randomNumber === 7) {
    eightBall = "It is certain."
} else if (randomNumber === 6) {
    eightBall = "It is decididely so."
} else if (randomNumber === 5) {
    eightBall = "Reply hazy...try again."
} else if (randomNumber === 4) {
    eightBall = "Cannot predict now."
} else if (randomNumber === 3) {
    eightBall = "Do not count on it."
} else if (randomNumber === 2) {
    eightBall = "My sources say no."
} else if (randomNumber === 1) {
    eightBall = "Outlook not so good."
} else {
    eightBall = "Signs point to yes"
}

console.log(eightBall)
