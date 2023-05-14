function canNest(arr1, arr2) {
    const arr1Min = Math.min(...arr1);
    const arr1Max = Math.max(...arr1);
    const arr2Min = Math.min(...arr2);
    const arr2Max = Math.max(...arr2);
  
    return arr1Min > arr2Min && arr1Max < arr2Max;
  }
  
 
  console.log(canNest([1, 2, 3, 4], [0, 6])); 
  console.log(canNest([3, 1], [4, 0])); 
  console.log(canNest([9, 9, 8], [8, 9])); 
  console.log(canNest([1, 2, 3, 4], [2, 3])); 
  