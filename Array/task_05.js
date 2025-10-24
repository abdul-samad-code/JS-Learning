
// Task 5: Combine and Sort
//  Goal: Merge two arrays and sort them in descending order.
//  Instructions:
// 1. Create two arrays: [10, 20, 30] and [40, 50, 60]
// 2. Merge them into one array.
// 3. Sort the array in descending order.
// 4. Print the result.

let arr1 = [10, 20, 30];
console.log(arr1);
let arr2 = [40, 50, 60];
console.log(arr2);
let Merge = arr1.concat(arr2);
console.log(Merge);
let short = Merge.sort((a, b) => b-a);
console.log(short);

