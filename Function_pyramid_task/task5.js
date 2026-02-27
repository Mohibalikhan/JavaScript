//  task 5
//  createInverseLeftParamid(rows)
function inverseleftpyramid(n) {

    for (let i = n; i >= 1; i--) { //Ye loop rows control karta hai.
        let row = '';       
        for (let j = 1; j <= n - i; j++) { //Ye spaces ki quantity control karta hai.
            row += '   ';
        }
        for (let k = 1; k <= i; k++) { //Ye stars ki qunatity control karta hai.
            row += ' * ';
        }
        console.log(row);
    }
}
inverseleftpyramid(5);


