let sheepCount = (array) =>{
    let sheepNumber = 0,authers = 0;
    array.forEach(element => {
        if(element == true){
            sheepNumber ++
        }else{
            authers++
        }
    });
        return {
            sheep :sheepNumber,
            AuthersAnimals: authers
        }
}



  console.log(
    sheepCount([true, true, true, false,
        true, true, true, true ,
        true, false, true, false,
        true, false, false, true ,
        true, true, true, true ,
        false, false, true, true,undefined,null])
  );

