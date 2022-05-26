// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even.

const num = 10;

for (let i = 0; i <= num; i++) {
    if (i === 0) {
        console.log((i) + " is even.")
    }
    else if (i % 2 === 0) {
        console.log((i) + " is even.");
    } else {
        console.log((i) + " is odd.");
    }
}

