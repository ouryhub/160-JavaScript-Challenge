// First solution
function doubleChar(String){
    let newString = '';
    for(let i = 0; i < String.length ; i++){
        newString += String[i] + String[i];
    }
    return newString;
}

// Second solution 
function doubleChar(String){
    let newString = ''
     String.split('').forEach(element => {
        newString += element + element
    });   

    return newString
}

console.log(doubleChar("Hello World"));
console.log(doubleChar("1234!_ ") );
