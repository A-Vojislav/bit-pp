// 1. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]


function task1 (input, k) {
    for(var i = 0; i < k; i++) {
        input.push(input.shift());
        } return input
    }

console.log(task1([1,2,3,4,5,6], 3))

// 2. Write a function that takes a number and returns array of its digits.

function task2(input){
    let result=input.toString().split('');
    return result
}
console.log(task2(234383))

// 3. Write a program that prints a multiplication table for numbers up to 12.


function task3(n) {
    let range = 12;
    for (let i = 1; i <= range; ++i){
    console.log( n + " * " +i +
            " = " + n *
                i); 
    } return 0
}

//KOMENTAR: Ovo resenje zadatka je tacno, ali bilo bi elegantnije da nisi morao da pises task3(1)+... i da na kraju ne radis return 0 :) 
// Tacno je i ovo, ali tema za razmisljanje kako bi mogao da unapredis funkciju da je pozoves samo jednom i da ne ide return 0.


console.log(task3(1)+task3(2)+task3(3)+task3(4)+task3(5)+task3(6)+task3(7)+task3(8)+task3(9)+task3(10)+task3(11)+task3(12))

//Evo druga varijanta :)

function zadatak3(input) {
    let result = '';

    for (let i = 1; i <= 12; i++) {
      for (let j = 1; j <= input; j++) {
        result += i+'*'+j+'='+i * j + '\n';
      }
      result += '\n';
    }
    return result;
  }
  console.log(zadatak3(12));


// 4.Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

function task4(input){
    let largest=input[0];
    
    for(let i =0; i<input.length; i++){
        if(typeof input[i] == 'number'&&input[i]<Infinity){
            if (input[i]>largest){
                largest=input[i];
            }   
        }
    }return [largest];
}
console.log(task4([2,5,3,0,49,55,2022,Infinity]));

// 5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.

function task5(input){
    let largest=input[0];
    let smallest=input[0]
    for(let i =0; i<input.length; i++){
        if(typeof input[i] == 'number'&&input[i]<Infinity){
            if (input[i]>largest){
                largest=input[i];
            }   
        }
    }
    for(let i =0; i<input.length; i++){
        if(typeof input[i] == 'number'){
            if (input[i]<smallest){
                smallest=input[i];
            }   
        }
    }return [largest,smallest];
}
console.log(task5([2,5,3,0,49,55,2022,Infinity]));

// 6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
//     poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
//     broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).


function task6(input){
    let sum=0;
    if (input.length%2==0){
            return (input[input.length/2-1]+input[input.length/2])/2;
    } 
        else{
            for(let i=0; i<input.length; i++){
                sum += input[i];
            } 
        return sum/input.length
    } 
    
}
// KOMENTAR: Izmenio sam pocetni niz da bude task6([1,2,3,9,21,25,29,29]), tj dodao sam jos jedan broj na kraj tvog niza.
// U zadatku kaze: ako je paran broj elemenata niza onda je medijana aritmeticka sredina dve srednje vrednosti.
// To znaci da je medijana aritmeticka sredina za 9 i 21. Kod tebe bi vratilo da je to 21. Sta mislis zasto? :) 
//to je zato sto nisam tako podesio da bude, nego sam ga namestio da izabere srednji index, a posto se vraca float
//vrednost on bira sledeci u nizu sto dodje u mom nizu broj 21, tj nisam racunao arimeticku sredinu nego samo sam uzimao broj iz niza
//sredjeno! :D

console.log( 'task 6: '+task6([1,2,3,9,21,25,29]));


// 7. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

function task7(input){
    'use strict'
    if (input.length%2==0){
            return [input[0], input[input.length-1]]
    } 
        else{
            return [input[0], input[(input.length-1)/2],input[input.length-1]]
    } 
    
}

console.log(task7([1,2,3,9,21,25,27]));

// 8. Write a function to find the average of N elements. Make the function flexible to receive
// dynamic number or parameters.

function task8(input){
    'use strict'
    let sum=0;
    for (let i=0;i<input.length;i++){
        if (typeof input[i] == 'number'){
            sum+=input[i];            
        }
    }return sum/input.length;
}

console.log(task8([1,2,3,5,9,11,15,17,20]));

//9. Write a function to find all the numbers greater than the average.
function task9(input){
    'use strict'
    let sum=0;
    let average=0
    for (let i=0;i<input.length;i++){
        if (typeof input[i] == 'number'){
            sum+=input[i];            
        }
    }
    average= sum/input.length;
    console.log('Average number of input is: '+ average)
    console.log('list of numbers larger then average:')
    for(let i=0;i<input.length;i++){
        if(input[i]>average){
            console.log(input[i])
        }
    }
    return `task 9 complete`
}

console.log(task9([1,2,3,5,9,11,15,17,20,25]));

// 10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
// square of the height (in meters). Write a function that takes two parameters, weight and
// height, computes the BMI, and prints the corresponding BMI category:
//  Starvation: less than 15
//  Anorexic: less than 17.5
//  Underweight: less than 18.5
//  Ideal: greater than or equal to 18.5 but less than 25
//  Overweight: greater than or equal to 25 but less than 30
//  Obese: greater than or equal to 30 but less than 40
//  Morbidly obese: greater than or equal to 40


function task10 (weight,height){
    let result= (weight/(height**2));
    if(result < 15){
        result = `Your BMI (${result}) falls within the starvation range`;    
    }else if((result > 15) && (result < 17.5)){
        result = `Your BMI (${result}) falls within the anorexic weight range`;
    }else if((result > 17.5) && (result < 18.5 )){
        result = `Your BMI (${result}) falls within the underweight range`;
    }else if((result > 18.5) && (result < 25 )){
        result = `Your BMI (${result}) falls within the ideal range`;
    }else if((result > 25) && (result < 30 )){
        result = `Your BMI (${result}) falls within the overweight range`;
    }else if((result > 30) && (result < 40 )){
        result = `Your BMI (${result}) falls within the obese range`;
    }else {
        result = `Your BMI (${result}) falls within the morbidly obese range`;
    }

   return result;
}

console.log(task10(96,1.83));

// 11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame.

function task11(input){
    let longest=0;
    let longestWord='';
    let output=0;
    let print='';
        for (let i=0; i<input.length; i++){
            if(input[i].length>longest){
                longest=input[i].length;
                longestWord=input[i];
            }
        }
        let borders='*'.repeat(longest+4);
        console.log(borders);
            let stars='';
            for (let j=0; j<input.length;j++){
                if (input[j] !== longestWord){
                    output=longest-input[j].length
                    stars=`* ${input[j]+' '.repeat(output)} *`;
                }
                if(input[j]===longestWord){
                    stars=`* ${longestWord} *`;    
                } 
                print= `${console.log(stars)}`;
            }  

       console.log(borders);

}

task11(['danas', 'je', 'nedelja','trinaesti','Novembar'])
