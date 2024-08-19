   let removeDuplicates = (arr)=>{
      tab = []
      for (const iterator of arr) {
         if ( !tab.includes(iterator)) {
            tab.push(iterator)
         }
         tab.sort((a, b) => a - b)
      }

      return tab
   }


   // console.table(removeDuplicates([1,1,2,4,5,2,1,2,3,5,5,5])) 
      console.log(removeDuplicates([1,1,2,4,5,2,1,2,3,5,5,5])); 
    // -> []