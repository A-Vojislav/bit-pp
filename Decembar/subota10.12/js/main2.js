// 1. Create a function that takes an array of objects (groceries) which 
// calculates the total price and returns it as a number. A grocery object 
// has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }

const Eggs={
    product: 'Eggs',
    quantity: 10,
    price: 20
};
const Bread={
    product: 'Bread',
    quantity: 1,
    price: 50
};
const Ham={
    product: 'Ham',
    quantity: 1,
    price: 310
}
const groceries=[Eggs,Bread,Ham];

function task1(){
    let eggsPrice=Eggs.quantity * Eggs.price;
    let BreadPrice=Bread.quantity * Bread.price;
    let HamPrice=Ham.quantity * Ham.price;

    return ` The price of all groceries is ${eggsPrice+BreadPrice+HamPrice} RSD`

}
console.log(task1(groceries))


// 2. You go to a jewelry shop and try to find the most expensive piece of 
// jewelry. You write down the name of each piece of jewelry and its 
// price. Create a function that gets the name of the piece of jewelry with 
// the highest price and returns "The most expensive one is the {name of
// jewelry piece}".
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold 
// watch’, price:250}, ...])
// - The most expensive one is the diamond Ring.

let input= {
    goldEarings: {
        name: 'Golden Earings',
        price: 200
    },
    goldWatch: {
        name: 'Golden Watch',
        price: 450
    },
    diamondBracelet:{
        name: 'Diamond Bracelet',
        price: 850
    }
}

function task2(input){
    let max= Math.max(input.goldEarings.price,input.goldWatch.price,input.diamondBracelet.price)

    if (max==850){
        return input.diamondBracelet
    } else if(max==450){
        return input.goldWatch
    } else {
        return input.goldEarings
    }
}
console.log(task2(input))

// 3. Given a word, create an object that stores the indexes of each letter in 
// an array. Make sure the letters are the keys. Make sure the letters are 
// symbols. Make sure the indexes are stored in an array and those 
// arrays are values.
// Examples:
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }


function task3(data){
    let print={};
    for (let i in data){
        print[data[i]]=Number(i)
        
    }
    console.log(print)
    return 
}

task3('Vojislav');



//4. And who cursed the most in the fight between you and your spouse? 
// Given an object with three rounds, with nested objects as your scores 
// per round, return a string of who cursed the most: If you, return "ME!" 
// If your spouse, return "SPOUSE!" If a draw, return "DRAW!"
// Examples:
// determineWhoCursedTheMost([{me: 10,    spouse: 5  },  {    me: 5,    
// spouse: 10  },   
// {    me: 0, spouse: 10,  }]) ➞ "DRAW!"
// determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 
// 10}, { me: 9,  spouse: 10}]) ➞ "ME!"
// determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9,  spouse:
// 44 }, { me: 10,    spouse: 55}]) ➞ "SPOUSE!"

let determine = {
    firstRound: {
        me:10,
        spouce: 5
    },
    secondRound: {
        me:0,
        spouce: 5
    },
    thirdRound: {
        me:5,
        spouce: 5
    }
 }

function task4(determine){
    let me=determine.firstRound.me + determine.secondRound.me + determine.thirdRound.me;
    let spouce=determine.firstRound.spouce + determine.secondRound.spouce + determine.thirdRound.spouce;

    if(me==spouce){
        return console.log('its a draw')
    } else if(me<spouce){
        return console.log('Spouce!')
    } else if(me>spouce){
        return console.log('Me!')
    }
}
task4(determine)


// 5. Create a function that converts color in RGB format to Hex format.
// Examples:
// rgbToHex({red: 0, green: 128,  blue: 192}) ➞ "#0080c0"

let dataTask5={red:0,Green: 128, blue:192}
function task5(dataTask5){
    let r = dataTask5.red;
    let g = dataTask5.Green;
    let b = dataTask5.blue;
    r = parseInt(r).toString(16);
    g = parseInt(g).toString(16);
    b = parseInt(b).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
}

console.log(task5(dataTask5))


// 6. Create a function that takes an amount of monetary change (e.g. 47 
// cents) and breaks down the most efficient way that change can be 
// made using USD quarters, dimes, nickels and pennies. Your function 
// should return an object.
// CoinValue
// Penny 0.01
// Nickel 0.05
// Dime 0.10
// Quarte
// r 0.25
// Examples:
// makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
// makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
// makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }


function task6(inputTask6,coins){

    let penniesCounter=0;
    let nickelCounter=0;
    let dimeCounter=0;
    let quartersCounter=0;
    let n=coins.length;
    let temp=inputTask6;
   // console.log(temp)

    if( temp>24){
        for(let i=0; i<temp;i++){
            if(temp>24){
                temp-=coins[3];
                quartersCounter++
            }
        }
    }
    if(temp>10){
        for(let i=0; i<temp;i++){
            if(temp>10){
                temp-=coins[2];
                dimeCounter++
            }
        }
    }
    if(temp>5){
        for(let i=0; i<temp;i++){
            if(temp>5){
                temp-=coins[1];
                nickelCounter++
            }
        }
    }
    if(temp>=0){
        for(let i=0; i<temp+1;i++){
            if(temp>=0){
                temp-=coins[0];
                penniesCounter++
            }
        }
    }
    return {quartersCounter,dimeCounter,nickelCounter,penniesCounter}
}

console.log(task6(92,[1,5,10,25]))




// 7. Create a function that takes an array of objects like { name: "John", 
// notes: [3, 5, 4]} and returns an array of objects like { name: "John", 
// avgNote: 4 }. If student has no notes (an empty array) then let's 
// assume avgNote: 0.
// Examples:
// [
//   { name: "John", notes: [3, 5, 4]}
// ] 
// ➞ 
// [
//   { name: "John", avgNote: 4 }
// ]
const inputTask7={
    name: "John", 
    notes: [3, 5, 4]
}

function task7(inputTask7){
    let avgNote=0;
    let name=inputTask7.name;
    let calc=inputTask7.notes;


    if(calc.length>0){
        for(let i=0; i<calc.length;i++){
            avgNote+=calc[i]
        }
        avgNote=avgNote/calc.length
    }

    return {name, avgNote }

}
//console.log(task7(inputTask7))


// 8. Given an object with students and the grades that they made on the 
// tests that they took, determine which student has the best Test 
// Average. The key will be the student's name and the value will be an 
// array of their grades. You will only have to return the student's name. 
// You do not need to return their Test Average.
// getBestStudent([{  name: ‘John’, grades: [100, 90, 80]}, {name: ‘Bob’, 
// grades: [100, 70, 80]}...]) ➞ "John" // John's avg = 90 // Bob's avg = 



function task8(inputTask8){

    let person1=inputTask8[0]
    let person2=inputTask8[1]
    let result=person2.name;
    let calc1=0;
    let calc2=0;

            for(let i=0; i<person1.grades.length;i++){
                calc1+=person1.grades[i];
            }
            calc1=calc1/person1.grades.length;


            for(let i=0; i<person2.grades.length;i++){
                calc2+=person2.grades[i];
            }
            calc2=calc2/person2.grades.length;

            if(calc1>calc2){
                result= person1.name
            }

    return result +' has the higher average mark'
}
//console.log(task8([{  name: 'John', grades: [100, 90, 80]}, {name: 'Bob', 
//    grades: [100, 70, 80]}]))