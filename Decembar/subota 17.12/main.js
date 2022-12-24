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

    function task5C(input){
        let output= task5B(input).shift()

        return output
    }
console.log(task5A([2, 3, 8, -2, 11, 4],6))
console.log(task5B(['JavaScript', 'Programming', 'fun', 'product']))
console.log(task5C(['JavaScript', 'Programming', 'fun', 'product']))



// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

// b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.


let inputTask6=[
{name: 'milk', price: 100},
{name: 'cigaretes', price: 330},
{name:'bananas', price: 150},
{name: 'bread', price:60}
]
const task6BResult = inputTask6.reduce((total, inputTask6 )=>{
    return total + inputTask6.price
},0)


const task6CResult= task6BResult/inputTask6.length

const task6D = inputTask6.reduce(function(prev, current) {
    return (prev.price > current.price) ? prev : current
}) 

console.log(`task 6 B: ${task6BResult}
task 6 c: ${task6CResult},
task 6 D: ${task6D.name.toUpperCase()}.`);


// 7.
// a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).
let inputTask7='SUBOtA2412'

function task7a(inputTask7){
    let output7a=false;
    
    if(inputTask7.toUpperCase()==inputTask7){
        output7a=true;
    }
    return output7a
}

function task7b(inputTask7){
    let output7b=false;

    for(let i = 0; i < inputTask7.length; i++){
        if(!isNaN(inputTask7.charAt(i)) && !(inputTask7.charAt(i) === " ") ){
            output7b=true;
        }
    }
    return output7b
}

function task7c (inputTask7) {
        if (inputTask7[0] != '#')
        return false;
    if (!(inputTask7.length == 4 || inputTask7.length == 7))
        return false;
    for (let i = 1; i < input.length; i++)
        if (!((inputTask7[i].charCodeAt(0) <= '0'.charCodeAt(0) && inputTask7[i].charCodeAt(0) <= 9)
            || (inputTask7[i].charCodeAt(0) >= 'a'.charCodeAt(0) && inputTask7[i].charCodeAt(0) <= 'f'.charCodeAt(0))
            || (inputTask7[i].charCodeAt(0) >= 'A'.charCodeAt(0) || inputTask7[i].charCodeAt(0) <= 'F'.charCodeAt(0))))
            return false;
    return true;
}

function task7d(inputTask7){
    let output7d=false
        if(inputTask7 >= 1900 && inputTask7 <= 2018){
        output7d=true
    } 
    return output7d
}

function validator(){
    const validator={};
    validator.stringValid=task7a(inputTask7);
    validator.passwordValid=task7b(inputTask7);
    validator.hexValid=task7c(inputTask7);
    validator.yearValid=task7d(inputTask7);
    return validator
}

console.log(validator())

// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days


function task8(){
    myBirthday = [10,09];
    today = new Date();
    bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);

    if(today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear()+1);
    }
    difference = bday.getTime()-today.getTime();
    days = Math.floor(difference/(1000*60*60*24))+1;
    return (days +" day(s) until your birthday!");
    }

console.log(task8())


// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

function task9(){
    let time_start = new Date();
    let time_end = new Date();
    let value_start = "8:22:13".split(':');
    let value_end = "11:43:22".split(':');
    time_start.setHours(value_start[0], value_start[1], value_start[2], 0)
    time_end.setHours(value_end[0], value_end[1], value_end[2], 0)
    result = time_end - time_start
    function msToTime(s) {

        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        let hrs = (s - mins) / 60;
        return hrs + ':' + mins + ':' + secs;

      }
      console.log(msToTime(result))
    }

    task9() 


// 10.
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
// b. Write a function that calculates the distance between two points in the space.

let x=Math.floor(Math.random() * 10);
let y=Math.floor(Math.random() * 10);
let z=Math.floor(Math.random() * 10);
let a=Math.floor(Math.random() * 10);
let b=Math.floor(Math.random() * 10);
let c=Math.floor(Math.random() * 10);

function pointInSpace(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
}
function pointInSpace2(x,y,z){
    this.x=a;
    this.y=b;
    this.z=c;
}
const point1=new pointInSpace(x,y,z)
const point2=new pointInSpace2(x,y,z)

console.log(point1)
console.log(point2)


function task10(point1,point2){
    let xResult=0;
    let yResult=0;
    let zResult=0;

        if(point1.x<point2.x){
            xResult= point2.x-point1.x
        } else{
            xResult= point1.x-point2.x
        }
        if(point1.y<point2.y){
            yResult= point2.y-point1.y
        } else{
            yResult= point1.y-point2.y
        }
        if(point1.z<point2.z){
            zResult= point2.z-point1.z
        } else{
            zResult= point1.z-point2.z
        }

    return {xResult,yResult,zResult}
}

console.log(task10(point1,point2))


// 11.
// a. Write a function that generates a random integer value between 5 and 20.
// b. Write a function that generates a random integer value between 50 and 100.
// c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.


function task11a(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function task11b(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function task11c(){
    let result=[];

    let ind= task11a(5,20)
    let ind2=task11b(50,100)

    if (isNaN(ind) && isNaN(ind2)){
        return `not a number`;
    } else(
        result.push(ind,ind2)
    )
    return result
  }

  console.log(task11c())

//   12. Write a function that shuffles the elements of a given array.

// Input: [3, 6, 11, 2, 9, 1]

// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

function task12(input){
    for (let i = input.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
    }
    return input
}

console.log(task12([3, 6, 11, 2, 9, 1]))
