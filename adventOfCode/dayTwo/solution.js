const input = require('./input');

for (let ii = 0; ii < input.length; ii++) {
    for (let jj = ii + 1; jj < input.length; jj++) {
        for (let kk = jj + 1; kk < input.length; kk++) {
            if (input[ii] + input[jj] + input[kk] == 2020) {
                console.log(input[ii], input[jj], input[kk], input[ii] * input[jj] * input[kk]);
            }
        }
    }
}