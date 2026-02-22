// create a function which generate the random password of given length
function generatepassword(length){
    randomstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for(let i=0; i<length; i++){
        let randomindex = Math.floor(Math.random() * randomstring.length);
        password += randomstring[randomindex];
    }   
    return password;
}
console.log(generatepassword(6))