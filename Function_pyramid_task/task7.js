// task 7: 
// above tasks, now take one parameter for symbol to be printed as *

function centerPyramid(n, symbol) {
    for (let i = n; i >= 1; i--) { //Ye loop rows control karta hai.
        let row = ' ';
        for (let j = 1; j <= n - i; j++) { //Ye loop spaces control karta hai.
            row += ' ';
            }
        for (let k = 1; k <= 2 * i - 1; k++) { //Ye loop stars control karta hai.
            row += symbol;
        }
        console.log(row);
    }
}
centerPyramid(6, '$');



