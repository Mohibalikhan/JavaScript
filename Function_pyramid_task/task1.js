//  task 1
// create a function which created a right pyramid
function rightpyramid(n) {
    for (let i = 1; i <= n; i++) { //Ye loop rows control karta hai.
        let row = '';

        for (let j = 1; j <= i; j++) { //Ye stars ki qunatity control karta hai.
            row += ' * ';
        }
        console.log(row);
    }
}
rightpyramid(5);









