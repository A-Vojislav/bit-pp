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


