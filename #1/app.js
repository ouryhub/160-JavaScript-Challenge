
let number = function(array){
    let somme = 0
       array.forEach((element,elemIndex) => {
        somme+= element[0] - element[1]
       });
       return somme;
}

console.log(number([[10,0],[3,5],[5,8]])); 
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])

