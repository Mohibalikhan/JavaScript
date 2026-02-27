function rightpyramid(n, symbol) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol + ' ';
        }
        console.log(row);
    }
}

function leftPyramid(n, symbol) {
    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 1; j <= n - i; j++) {
            row += '  ';  // spaces
        }

        for (let k = 1; k <= i; k++) {
            row += symbol + ' ';
        }

        console.log(row);
    }
}

function centerPyramid(n, symbol) {
    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            row += symbol;
        }

        console.log(row);
    }
}

// task 8: 
// createParamid($row, symbol, $type)
// type means ki konsa pyramid banana hai, right, left ya center
// use if, else if , else statement 
// function to uper bane hoe han to call them in function createPyramid and pass the parameters to them
// depend on type call respective above function 

export { rightpyramid, leftPyramid, centerPyramid };

function createPyramid(row, symbol, type) {
    if (type === 'right') {
        rightpyramid(row, symbol);
    }
    else if (type === 'left') {
        leftPyramid(row, symbol);
    }
    else if (type === 'center') {
        centerPyramid(row, symbol);
    }
    else {
        console.log('Invalid ');
    }
}

// Function Calls
// createPyramid(5, '*', 'right');
// createPyramid(5, '#', 'left');
// createPyramid(6, '%', 'center');
