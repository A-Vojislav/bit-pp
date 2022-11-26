// 1. Write a function that checks if a given string contains 5 digits.
// Input: “1b8952abd” 
// Output: true
//     1A. Modify previous task to check if it contains char or number "5". 

// Input: “1bser9re”
// Output: false


let task1=function (input){
    let splitInput = input.split('');
    let isNumberThere = false;
    let counter=0;
            for(let i=0;i<input.length;i++){
              
                if(Number.isInteger(parseInt(splitInput[i]))){
                            counter++;
                            if(splitInput[i]==5 || splitInput[i]=='5' ){
                                console.log(`there is a string or Number 5 in the Input`);
                                break;
                            } else {
                                console.log(`there is no number or string with '5`)
                                break;
                            }
                        }
            }


        if (counter==5){
            return true;
        } else{
            return false;
        }


}

task1('1b8952abd6');


// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

function task2 (input) {
    return input.replaceAll('JS', '**');
}
console.log(task2('Programming in JS is super interesting!'));


// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’ 
// Output: “Good morning” 


let task3=function (index,string){
    let text='Goo morning';
    let textarr=Array.from(text)
    textarr.splice(index-1,0,string)
    return textarr.join('')
}

console.log(task3(4,'d'))

// 4. Write a function that deletes a character from the given position in the string. 
// Input: “Goodd morning!”, 3 
// Output: “Good morning!” 

let task4=function (inputString,index){

    let outputString=inputString.split('');

    outputString.splice(index,1);

    return outputString.join('');
}

 console.log(task4('Goodd morning!',3))


//  5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

let task5= function(input){
    let output=[];
    for(let i=0; i<input.length;i++) {
        if(i%2==0){
            output.push(input[i]);
        }
    }
    return output
    
}
console.log(task5([3, 5, 1, 8, 90, -4, 23, 1, 67]));

// 6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

let task6=function(input,indexFrom,IndexTo){
    let output=[];
    for(let i=0; i<input.length;i++){
        if(i >= indexFrom && i <= IndexTo){
            output.push(input[i]*2);
        }else{
            output.push(input[i]);
        }
    }
    return output;
}

console.log(task6([3, 5, 1, 8, 90, -4, 23, 1, 67],2,6))

// 7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

let task7=function (inputA, inputB) {
    for(let i = 0; i < inputA.length; i++){
        for(let j = 0; j < inputB.length; j++){
            if(inputA[i] == inputB[j]){
                result = 'all elements of array 1 are contained array 2';
            } else {
                result = 'not all elements of array 1 are contained in array 2';
                }
            }
        } return result;
    }
    console.log(task7([3, 4, 1, 3, 7], [8, 9, 3, 1, 11, 4, 3]));

//     8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

let task8=function (input){
    let result=input.sort(function(a,b) {
        return a.indexOf("a") - b.indexOf("a");
    });
    return result;
}
console.log(task8(['apple', 'tea',  'amazing', 'morning', 'JavaScript']))


// 9. Write a function that prints out the date of the next day. 
// Output:  25. 10. 2018. 
let task9= function (input){
    let day = new Date(input);
    console.log(`the set day is ${day}, so tomorow is:`);
    
    let tomorrow = new Date(day);
    tomorrow.setDate(day.getDate() + 1);
    return tomorrow;
}
console.log(task9('Dec 31 2018'));

// 10. Write a function that prints out the date of the previous day. 
// Output:  23. 10. 2018. 

let task10= function (input){
    let day = new Date(input);
    console.log(`the set day is ${day}, so yesterday was:`);
    
    let yesterday = new Date(day);
    yesterday.setDate(day.getDate() -1);
    return yesterday;
}
console.log(task10('Oct 24 2018'));

// 11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output: 
//   78
//  111 
//    4
// 4321

let task11= function(input){
    
    for(let i=0; i<input.length;i++){
        console.log(input[i])
    }

}

console.log(task11([78, 111, 4, 4321]));

