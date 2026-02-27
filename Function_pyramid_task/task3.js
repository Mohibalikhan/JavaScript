// task 3
// create a function which created a center pyramid

function centerPyramid(n) {

    for (let i = 1; i <= n; i++) { //Ye loop rows control karta hai.
        let row = '';
        for (let j = 1; j <= n - i; j++) { //Ye loop spaces control karta hai.
            row += ' ';
            }
        for (let k = 1; k <= 2 * i - 1; k++) { //Ye loop stars control karta hai.
            row += '*';
        }
        console.log(row);
    }
}
centerPyramid(6);
