// 1. Write a function that checks if a given string contains 5 digits.
// Input: “1b8952abd” 
// Output: true
//     1A. Modify previous task to check if it contains char or number "5". 

// Input: “1bser9re”
// Output: false


function task1(input){
    let splitInput=input.split('');
    let isNumberThere=false;
    let counter=0;
            for(i=0;i<input.length;i++){
                if(Number.isInteger(parseInt(splitInput[i]))){
                            counter++
                        }
            }
            console.log(counter)
        if (counter==5){
            return true
        } else{
            return false
        }
}

task1('1b8952abd')