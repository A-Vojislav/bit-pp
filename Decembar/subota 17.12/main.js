// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]


function task1(input){
    let output=[];

    for (let i=0; i<input.length;i++){
        output.push(input[i]);
        output.push(input[i]);
    }

    return output;
}

console.log(task1([2, 4, 7, 11, -2, 1]))


// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]


function task2(input){

    let output = Array.from(new Set(input))
    return output.sort(function(a,b) { return a - b; })

}
console.log(task2([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))

//3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function task3(inputA,inputB){
    let outputA=false;
    let outputB=0;
    for(let i=0;i<inputA.length;i++){
        if(inputA[i] % 2==1){
            outputA=true;
            break
        } 
    }

    if (inputB.length %2==0){
        return `
        ${outputA},
        Input error, array has even number of elements;`
    } else{
        let b=inputB[parseInt((inputB.length)/2)]
        for(let i=0;i<inputB.length;i++){
            if(inputB[i]<b){
                outputB++
            }
        }
    }
return `Task 3-A = ${outputA}, Task 3-B = ${outputB}`

}

console.log(task3([1, 2, 9, 2, 1],[-1, 8.1, 3, 6, 2.3, 44, 2.11]));


// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }


function task4(input){
    let output={}
    let minValue= Math.min(...input)
    output.minValue=minValue
    output.minLastIndex= input.lastIndexOf(minValue)
    
    return output
}

console.log(task4([1, 4, -2, 11, 8, 1, -2, 3]))


// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.


    function task5A(inputA,searchingFor){
        let outputA=[];
        for(let i=0;i<inputA.length;i++){
            if(inputA[i]<searchingFor){
                outputA.push(inputA[i])
            }
        }
        return outputA
    }
    function task5B(inputB){
        let outputB=[];
        for ( let i=0;i<inputB.length;i++){
            if(inputB[i].includes('pro') || inputB[i].includes('Pro')||inputB[i].includes('PRO')){
                outputB.push(inputB[i])
            }
        }
        return outputB
    }

    //jos pod c
console.log(task5A([2, 3, 8, -2, 11, 4],6))
console.log(task5B(['JavaScript', 'Programming', 'fun', 'product']))