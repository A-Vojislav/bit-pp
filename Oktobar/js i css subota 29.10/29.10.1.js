// Write a function to check whether the `input` is a string or not.


let x= 'subota je danas'
function daLiJeString(x) {
    if(typeof a === 'string') {
        return 'True'
    }
    else {return 'False'}
} console.log(daLiJeString(x))


// 2. Write a function to check whether a string is blank or not.

function imaLiData (x){
    if (typeof x==='string'){
        return'String data exists'}
    else if (x.length==0 || typeof Number){
        return `There is no input or its a number`
  }
}
console.log(imaLiData(78))

// 3. Write a function that concatenates a given string n times (default is 1).


function ponovi (tekst,broj){
    return `The result is : ${tekst.repeat(broj)}`
}
console.log(ponovi('subota',2))

// 4. Write a function to count the number of letter occurrences in a string.
function brojPonavljanja(cetvrti){
    let n=0;
    for (let i =0; i<=cetvrti.length; i++){
        if(cetvrti[i]=='n'){
            n++;
        }  

    } 
    return `Slovo 'n' se pojavljuje ${n} puta` ;

}
console.log(brojPonavljanja('ansfalksfjdaodisjfannnnnnn'))

// 5.Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.
// const petiarray=['smaxkasdcajkxc nqoawskjd'];

function pozicija(petiarray,x){
   let result='';
    for(let i = 0; i < petiarray.length; i++) {
        if(x == petiarray[i]) {
            result=i;
            break;
        } else {
            result='-1';
        }
    }   
    return result
}
console.log(pozicija('smaxkasdcajkxc nqoawskjd', 'x'))

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

// function lastOccurrence(a, x){
//     var result = '';
//     if(a.includes(x)) {
        
        //KOMENTAR: zasto lastIndexOf(x) + 1 ? :) Zanima me taj +1, zbog cega? :) 
        // Ovaj zadatak si mogao slicno kao i prosli: krenes ovoga puta od poslednjeg elementa u stringu, proveravas da li se poklapa sa zadatim. Obicna for petlja.
        //ne znam dobro da koristim petlje pa sam ih izbegavao, u vezbama od juce sam se trudio maksimalno da koristim kako bi savladao. A sto plus 1, mislim da je samo ostalo od nekog pokusaja, 
        //ili toga sto sam prebacio kao da je index od array-a, pa kao pri humanizaciji da ne pokazuje broj index-a, nego nama razumniji broj, tj da brojanje pocne od 1, a ne od nula.nisam sasvim siguran.         
        //sad cu comment out ovaj pa ispocetka.
//         result = a.lastIndexOf(x) + 1
//         } else {
//         result = '-1';
//         }
// return result
//     }
// console.log(lastOccurrence('smaxkasdcajkxc nqoawskjd', 's'))
    function lastOccurrence(array,x){
        let result;
        for (let i=array.length; i>=0;i--){
            if(x == array[i]) {
                result=i;
                break;
            } else {
                result='-1';
            }
        }   
        return result
        }
    
        console.log(lastOccurrence('smaxkasdcajkxc nqoawskjd', 's'))

// 7. Write a function to convert string into an array. Space in a string should be represented as
// ???null??? in new array.

const my_string = "Danas je subota";
const pokusaj=[...my_string];

const result = pokusaj.map(x =>x
    .replaceAll(' ', 'Null'));
console.log(result)

function stringToArray (a) {
    var result = [];
        for(var i = 0; i < a.length; i++) {
            if (a[i] == ' ') {
                  result.push('null')
         } else {result.push(a[i])}
    } return result
    }
    console.log(stringToArray('vow  ejoe'));

// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

//KOMENTAR: Ovde nisi dobro napravio uslove. "Prime" brojevi su deljivi samo sa samim sobom i jedinicom.
// Primer: 169. Ovo NIJE Prime broj, zato sto je deljiv sa 1, sa 169 i sa 13 :D A kod tebe u zadatku bi bio.
// Kako onda uraditi? Ja bih isao sa For petljom, isao bih od broja 2 do broja N-1 (N je zadati broj). Zasto tako?
// Zato sto ti nije bitno da li je deljiv sa 1 i sa samim sobom, to je definisano u zadatku. Bitno ti je da NIJE deljiv sa svim drugim brojevima izmedju.
// Ako je deljiv - onda nije prime, lupis Break u For petlji. Ako nije deljiv - vrtis petlju i dalje. Ako ne bude ni sa jednim vise deljiv - Prime je :)
//Hvala puno! prepravljam odmah, isti slucaj kao i gore, bezao sam od lupova jer nisam znao lepo da ih koristim. pa evo vracam se na uvezbavanje.
//ipak i uz tvoju pomoc trebalo mi je vremena da resim, ali uspeo sam bez guglanja i bas sam se obradovao!
// function isPrime(number)
// { 
//   if (number <= 1){
//   return false;
//   } else if (number <= 3){
//   return true;
//   } else if (number%2 == 0 || number%3 == 0){
//   return false;
// }

//   return true;
// }
// console.log(isPrime(83))
function isPrime(number){
    let result;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            result = false;
            break;
        }
              else {
            result=true;
        }
        
    }
    return result
}
console.log(isPrime(169))

// 9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use ???-??? (dash) as the default separator.


//KOMENTAR: Ovde u funkciji si mogao da imas ulazni parametar separator, sitna modifikacija ;)


function zadatak9 (a, separator) {
    let result = [];
    if(separator==undefined){
        for(var i = 0; i < a.length; i++) {
                if (a[i] == ' ') {
                          result.push('-')
                 } else {result.push(a[i])}
            } return (result.join('').toString())
    }

        for(var i = 0; i < a.length; i++) {
            if (a[i] == ' ') {
                  result.push(separator)
         } else {result.push(a[i])}
    } return (result.join('').toString())
    }
    console.log(zadatak9('Danas je subota'));

//10.Write a function to get the first n characters and add ???...??? at the end of newly created string.

let n=4
const deseti=['Danas je subota']


function zadatak10(){
    let n=4;
    let result=deseti.toString();
    return result.slice(0,n)+'...'
}
console.log(zadatak10(deseti))

// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.

//KOMENTAR: Ovde si malo mutio, u sustini si dobio sto si hteo ali nisi uoblicio. Neka ti funkcija dobije oblik :)
//jesam sto kazes mutio i toliko zamutio da sad nebi umeo da ga raspletem,uoblicio sam za sad pa cu se vratiti na ovaj kad budem malo odmorniji :)
const arrstring = ['1',2,'o','d',3,4,5,'w']
function filterZadatak11(arrstring){
const arrbrojeva = [];

arrstring.forEach(function (jelbroj) {
        arrbrojeva.push(Number(jelbroj))
    });

console.log(arrbrojeva.filter(Number.isInteger));
}
filterZadatak11(arrstring)
// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.


function doPenzije(gender, age){
    if (gender=='male'&& age<=65){
        let maleret=65;
        return `Ostalo je jos ${maleret-age} godina rada do penzije`;
    } else if (gender=='female' && age<60){
        let femaleret=60;
        return `Ostalo je jos ${femaleret-age} godina rada do penzije`;
    }  else if(gender=='male' && age>65){
        return `U penziji si vec ${age-65} godina`;
    } else if (gender=='female' && age > 60)
        return `U penziji si vec ${age-60} godina`;
}
console.log(doPenzije('female',55));

// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -&gt; 1st
// 11 -&gt; 11th

//KOMENTAR: Sta ako je broj 11? :) Nisi pokrio brojeve vece od 3.
// Ja bih ovo uradio na nacin da broj pretvorim u string, pa proveravam poslednji element stringa. Zasto poslednji?
// Zato sto od poslednjeg zavisi da li je 11th ili 1st :) Ili je mozda 23rd.
//da, nisam dovoljno razmisljao o ovom zadatku, cim je krenulo da se redja od 3 nadalje sve je 'rd, ustvari nije.
// moram jos da radim na ovome, ali cini mi se da sam ih sve pokrio

function humanizacijaBroja(number){
  let stringnum=number.toString()
  let poslednji=stringnum.charAt(stringnum.length-1); 
    if (number<=0){
        return `nema sufiks, unesi veci ili pozitivan broj`
    }
  if (number>=1 && number<=10){
    if (poslednji == '1') {
        return stringnum + 'st';
    } else if (poslednji === '2') {
        return stringnum + 'nd';
    } else if (poslednji === '3') {
        return stringnum + 'rd';
    } else {
        return stringnum + 'th';
    }
    
  }
         if (number>10 && number<21){
            return stringnum +'th'
  } 
        if (number>20 && number <Infinity) {
            if(poslednji=='1'){
            return stringnum + 'st';
        } else if (poslednji === '2') {
            return stringnum + 'nd';
        } else if (poslednji === '3') {
            return stringnum + 'rd';
        } else {
            return stringnum + 'th';
        }
    }
} 
console.log(humanizacijaBroja(555));

