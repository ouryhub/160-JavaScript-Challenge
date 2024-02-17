   let removeDuplicates = (Array)=>{
      let  i = 0,t = []
      while(i < Array.length){
         if(Array[i] == Array[i+1]){
            Array.splice(Array[i],1)
         }
         i++ 
      }
      return 

    }


   console.table(removeDuplicates([1,1,2,4,5,2,1,2,3,5,5,5])) 
    // -> []