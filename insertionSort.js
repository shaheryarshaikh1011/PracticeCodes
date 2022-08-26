function insertionSort(arr){
    for(let i = 1; i < arr.length;i++){

        
        for(let j = i - 1; j > -1; j--){
            
            
            if(arr[j + 1] < arr[j]){

            
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

            }
        }
    };

  return arr;
}

console.log(insertionSort([95,45,-12,34,0,1,24,-32,54]));