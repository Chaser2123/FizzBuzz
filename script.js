function FizzBuzz() {
    //counters to test the multiples
    let x = 0;
    let y = 0;
    //variable for the output on the p tag
    let output = "";
    //loop to run the test multiple times
    for (let i = 1; i <= 100; i++) {
        //adds to the counters
        x += 1;
        y += 1;
        //tests if both counter hit their mark, then adds 'Fizz Buzz' and resets the variables
        if (x === 3 && y === 5) {
            output += 'Fizz Buzz <br>'
            x = 0;
            y = 0;
            //tests if y hit 5 but x didn't hit 3, then adds 'Buzz' and resets y
        } else if (y === 5 && x != 3) {
            output += 'Buzz <br>'
            y = 0;
            //tests if x hit 3 but y didn't hit 5, then adds 'Fizz' and resets 3
        } else if (x === 3 && y != 5) {
            output += 'Fizz <br>'
            x = 0;
            //if neither hit their mark, it adds the current iteration
        } else {
            output += i + '<br>'
        }
        //this lets the fizz buzz show on the html page
        document.getElementById('chat').innerHTML = output;
    }
}

