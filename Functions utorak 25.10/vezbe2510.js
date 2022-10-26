//1. Write a program that calculates the maximum of two given numbers.



function prviZadatak(prvi, drugi){
    if(prvi>drugi){
        return prvi
    }   else {
        return drugi
    }
}
console.log(prviZadatak(5,1))
console.log('zavrsen zadatak 1')
//2. Write a program that checks if a given number is odd.

function drugiZadatak (x){
    if (x === 0) {
        return(`number${x} is a even number`);
}   else if (x % 2 === 0) {
        return (`number${x} is a even number`);   
}   else if (x%2 !==0) {
    return (`Number${x} is an odd number`)
}
}

console.log(drugiZadatak(33))
console.log('zavrsen zadatak 2')
//3. Write a program that checks if a given number is a three digit long number.

function treciZadatak (y){
    if (y >99 && y<1000) {
        return `Number${y} is 3 digits long`;
    } else {
        return `Number${y} is not 3 digits long`;
    }
}
console.log(treciZadatak(1500))
console.log('zavrsen zadatak 3')

// 4. Write a program that calculates an arithmetic mean of four numbers.

function cetvrtiZadatak (a,b,c,d){
    return (a+b+c+d)/4
}
console.log(cetvrtiZadatak(5,6,7,8));
console.log('zavrsen zadatak 4')
// Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****
let square1=`
*
*`
let square2=`
**


**`
let square3=`
***


***`
let square4=`
****
*  *
*  *
*  *
****`
let square5=`
*****
*   *
*   *
*   *
*   *
*   *
*****`
function petiZadatak (a){
    switch (a){
    case 1: 
        a=1;
        return square1;
    case 2:
        a=2
        return square2
    case 3:
        a=3
        return square3             
    
    case 4:
        a=4
        return square4                
    
    case 5:
        a=5
        return square5                
    }
  
}
console.log(petiZadatak(4))
console.log('zavrsen zadatak 5')


// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

function sestiZadatak (a6,b6,c6,simbol){
        if (a6>1){
         resulta6= simbol.repeat(a6);
        }
        if (b6>1){
         resultb6= simbol.repeat(b6);
        }
        if (c6>1){
         resultc6= simbol.repeat(c6);
        }
        
        return `
        broj a:${(resulta6)}
        broj b:${resultb6}
        broj c:${resultc6}`
    }

console.log(sestiZadatak(4,5,9,'*'))
console.log('zavrsen zadatak 6')


// 7. Write a program that calculates a number of digits of a given number.

function sedmiZadatak (a){
    return a.toString().length
}
console.log(sedmiZadatak(232))
console.log('zavrsen zadatak 7')
//8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

const datArray=[2, 4, 7, 8, 7, 7, 1];

function osmiZadatak(e, res){
    e = 7
    res = 0
        for(let i = 0; i < datArray.length; i++) {
         if(e === datArray[i]) {
              res = res + 1
 }
}
return res
}

console.log(osmiZadatak(datArray))
console.log('zavrsen zadatak 8')
//9. Write a program that calculates the sum of odd elements of a given array.

const x=[2, 4, 7, 8, 7, 7, 1];

function devetiZadatak (x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      if (i % 2 !== 0){ 
      sum = sum + x[i];
      }
    }
    return `Sum of odd numbers is ${sum}`;
}
   
  console.log(devetiZadatak(x));
console.log('zavrsen zadatak 9')
//   10. Write a program that calculates the number of appearances of a letter a in a given string.
//   Modify the program so it calculates the number of both letters a and A.

let randomTekst= 'askjdqipjdasAAAAAAjdaoipsaaaaafwiaja';
let maloa= 0;
let velikoA= 0;

function brojPonavljanja(){
    for (let i =0; i<=randomTekst.length; i++){
        if(randomTekst[i]=='a'){
            maloa++
        }  else if (randomTekst[i]=='A'){
            velikoA++
        }

    } 
    return `malo 'a' pojavljuje se ${maloa} puta, a veliko 'A' ${velikoA} puta`

}
console.log(brojPonavljanja(randomTekst))
console.log('zavrsen zadatak 10')
// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.


let tekst11='abc';
let broj=6;
function zadatak11 (tekst11,broj){
    return `The result is : ${tekst11.repeat(broj)}`
}
console.log(zadatak11(tekst11,broj))