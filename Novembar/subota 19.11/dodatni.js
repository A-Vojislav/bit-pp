// 1.Create a function that returns the sum of missing numbers.
// Examples: sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29  // 2 + 4 + 6 + 8 + 9
// sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
// sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575

function sumMissingNumbers(input){
    counter=input[input.length-1]
    let missing=[];
    let result='';
    let missingTotal=0;
    for (let i=1; i<=counter;i++){
        if(input.indexOf(i)==-1){
            missing.push(i);
        }
    }
    for(let i=0;i<missing.length;i++){
        missingTotal+=missing[i]
    }
    result=`The numbers missing are ${missing}, and their sum is ${missingTotal}`;
    console.log(result);
}

sumMissingNumbers([1, 3, 5, 7, 10])
sumMissingNumbers([10, 20, 30, 40, 50, 60])

//negde gresim ali ne mogu da shvatim gde sam pogresio jer ne dobijam isti zbir kao ti, ako moze pomoc


// 2.Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise. Arrays do not have to be sorted (see example #2).
// Arrays should concatenate to create the final array exactly (examples #3 and #4).
// Examples: canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Duplicate 7s not found in target array.
// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Missing 6 from target array.

