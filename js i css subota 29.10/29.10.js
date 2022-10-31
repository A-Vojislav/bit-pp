// 1. Write a program to insert a string within a string at a particular position (default is 1,
//     beginning of a string).
// 'My random string', 'js', 'JS My ranodom string'
// 'My random string', 'js', 10 'my random js string'

let original= "My random string";
let ubacujem= "js";
let uIndex = 2;
function ubacivanje(original,ubacujem,uIndex){
original = original.split('');  
original.splice( uIndex , 0, ubacujem );
original = original.join('');
return original
}

console.log(ubacivanje(original,ubacujem,uIndex))


//2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.

function filtriraj(array){
    return array.filter(Boolean);
}
console.log(filtriraj([NaN,0,15,false,-22,'',undefined,47,null])+` je resenje 2 zadatka`)


// Write a program to filter out falsy values from the array.

function filterZaFalsy(array){
    return resenje= array.filter(Boolean);
    
}
console.log(filterZaFalsy([NaN,0,15,false,-22,'',undefined,47,null]))

// 4. Write a function that reverses a number. The result must be a number.

function obrniBroj(num) {
   
   return resenje=parseInt(num.toString().split('').reverse().join(''))

  }
console.log(obrniBroj(654321))

// 5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
// last &#39;n&#39; elements of the array.

const zad5=[1,2,3,4,5,9,8,7,6];
let n=20;

function uzmiKolikoTreba(zad5,n) {
    if (n>zad5.length){
        return `${n} je veca vrednost od duzine areja, probaj drugi broj`
    }
    return rezultat=zad5.slice(-n);
}
console.log(uzmiKolikoTreba(zad5,n))


// 6. Write a function to create a specified number of elements with pre-filled numeric value
// array.

function ponoviNputa(ponovi, n6){
    return filledArray = new Array(n6).fill(ponovi);
}
console.log(ponoviNputa(true,5))

// 7. Write a function that says whether a number is perfect.

function savrseniBroj(n){
    if (n==6 || n==28 || n==496 || n==8128||n==33550336||n==8589869056){
        return `the number ${n} is a perfect number`;
    } else {
        return `the number ${n} is not a perfect number`;
    }
}
console.log(savrseniBroj(496))

// 8. Write a function to find a word within a string.

function potraziRec (primer,trazimo){
    if(primer.includes(trazimo)){
        return `Rec ${trazimo} je sadrzana u: ${primer}`;
    } else {
        return `Rec ${trazimo} nije sadrzana u: ${primer}`;
    }
}

console.log(potraziRec('Evo ga ponedeljak a ja jos nisam zavrsio domaci', 'ponedeljak'));

// 9. Write a function to hide email address.

function sakrijEmail(unetemail) {
    let brisemDeo, parce, parce1, parce2;
    parce = unetemail.split("@");
    parce1 = parce[0];
    brisemDeo = parce1.length / 2;
    parce1 = parce1.substring(0, (parce1.length - brisemDeo));
    parce2 = parce[1];
    return `prikazujem : ${parce1}...@${parce2};`
};

console.log(sakrijEmail('myemailaddress@bgit.rs'));

// 10. Write a program to find the most frequent item of an array.

function thebiggest (array) {
    let result = [undefined, 0];
    array = array.sort();
    for (let i = 0; i < array.length; i++) {
    let brojac = 0;
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                brojac++
        }
         if (brojac >= result[1]) {
            result[1] = brojac;
            result[0] = array[i];
            }
        }
    }
        return `Najcesce se ponavlja ${result.toString()} puta`;
}
console.log(thebiggest([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));