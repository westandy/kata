const input = require('./input');

for (let ii = 0; ii < input.length; ii++) {
    for (let jj = ii + 1; jj < input.length; jj++) {
        if (input[ii] + input[jj] == 2020) {
            console.log(input[ii], input[jj], input[ii] * input[jj]);
        }
    }
}