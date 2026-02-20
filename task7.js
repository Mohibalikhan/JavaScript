// Create a Function which check how many vowels a,e,i,o,u are present in a specific word
function countvowels(text){

    let count = 0;
    for(let i=0; i<text.length; i++){
        let char = text[i].toLowerCase();
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }

    return count;
}
console.log(countvowels("Mohib"))
console.log(countvowels("Education"))