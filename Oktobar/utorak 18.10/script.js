//1 zadatak
let sum = 0;
for (let i = 1; i <= 10; i++) {
sum = sum + i;
}
console.log(sum)

//2 zadatak

let a = [1,2,3,4,5,6,7,8,9];
for ( let i = 0; i < a.length;i++) {
   a[i] = a[i]*a[i]*a[i];
}
console.log(a);


//3 zadatak
let factorial=1;
let integer=5;
for(let i = 1; i <= integer; i++) {
    factorial *= i;
    console.log(factorial)
  }

//4 zadatak, treba jos suma ali ne znam kako to da uradim

for (let x=1; x<=10; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
}

//5 zadatak


    let n = 232;
    for(i = 0; n > 0; i += n % 10, n = parseInt(n / 10));
    console.log(i);


//6 zadatak

let string = "Vojislav1991";  
// let letterCount=string.length;
// console.log('There is ' + letterCount+ ' letters in this string')

for(let i=0; i<=string.length;i++){
    console.log('!There is ' + i+ ' letters in this string');
    i++;
}

//7 zadatak

const niz = [1, 3, 32, '$', 'g', 'h', 't', 's', 'c', 66, 23, 'h2'];

for (i=0; i<niz.length; i++) {
    console.log('index: '+i+', value: '+niz[i]);
    
  }