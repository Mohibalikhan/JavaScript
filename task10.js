// create a function which print the multiplication table of a given number

function printtable(num){
    for(i=1; i<=10;i++){
        console.log(num + "x" +i+"="+num*i)
    }
}
console.log(printtable(3))