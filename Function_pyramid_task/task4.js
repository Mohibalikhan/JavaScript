// task 4
// - createInverseRightParamid(rows)


function inverserightpyramid(n) {

    for (let i = n; i >= 1; i--) { //Ye loop rows control karta hai.
        let row = '';

        for (let j = 1; j <= i; j++) { //Ye stars ki qunatity control karta hai.
            row += ' * ';
        }
        console.log(row);

        
    }

}
inverserightpyramid(5);

