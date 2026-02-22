// function which remove space in a string
// string.replace(kia_replace_karna_hai, kis_se_replace_karna_hai)
// \s (space, tab, newline) and g is used to replace all whitespace characters in the string.
function removeSpace(text){
   
    return text.replace(/\s/g,'');
}
console.log(removeSpace("Hello  World"))