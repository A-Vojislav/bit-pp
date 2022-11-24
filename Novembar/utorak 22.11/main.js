// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]


function task1 (input) {

    function output (input){
     [input[0], input[input.length - 1]] = [input[input.length - 1], input[0]];
     return input;
    }
    return input
    }


console.log(task1([4, 5, 11, 9]))


// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

function task2(a,b){
    let result=0;
    console.log(a,b)
    function output (a,b){
        result=a*b;
        return result
    }
    return output(a,b)
}

console.log(task2(4,5))

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

// function task3(input){
//     console.log(input);
//     function output(input){

//        input.splice(1,'m','*')
//     }
//     console.log(output('prograMming'))
// }

// task3('prograMming')


function task3 (input) {
    return output();

    function output() {
        counter = 0;
        const b = [];
        for (var i = 0; i <= input.length; i++) {
            if (input[i] == 'm' || input[i] == 'M') {
                counter++;
                b.push('*');
            } else if (input[i] !== 'm' || input[i] !== 'M') {
                b.push(input[i]);
            }
        }
        return `output: ${counter} replaced, ${b.join('')}`;
    }
}
    
    
    
console.log(task3('prograMming'));

// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com


function task4(name, surname){
    return output();
    function output(){
        return `${name}.${surname}@gmail.com`
    }

}


console.log(task4('Vojislav', 'Alic'));

// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28


function taks5(input) {
    return convert()
    function convert(){
        var result = parseInt(input,8);
    return result;
    }
}
console.log(taks5('034'));


// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!

function task6(input){

    if (successCallback()==true){
        return `password is fine`;
    } else if(successCallback()==false){
        return errorCallback();
    }

    function successCallback(){
        let result=' ';
        let checkForNumber= input.split('')
        let isNumberThere='';
            for(i=0;i<input.length;i++){
                if(Number.isInteger(parseInt(checkForNumber[i]))){
                            isNumberThere=true;
                        }
            }

        if(input.length > 6 && isNumberThere==true) {
            result=true;
        } 
        return result;
    }

    function errorCallback(){
        let result= `Password is invalid`;
            return result;
        
    }
}

console.log(task6('JSasdsa1'));

// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

function task7(input){
    return output()

    function output(){
        let result=[];
            for (let i=0; i<input.length; i++){
                if(input[i] % 2 !==0){
                    result.push(input[i]);
                }
            }
        return result;
    }
}
console.log(task7([2, 8, 11, 4, 9, 3]));
