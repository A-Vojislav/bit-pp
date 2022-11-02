//1 zadatak

const a=[5,-4,2,3,7];
let res='yes';
for (i=0; i<a.length;i++){
    if(a[i]==3){
        res='yes'
    break
    } else{
        res='no'
    }
    
}
console.log(res)
console.log('zavrsen zadatak 1')

//2 zadatak

const array = [-3, 11, 5, 3.4, -8]
var sum = 1
for (i=0; i < array.length; i++) {
    if (array[i] > 0){
        sum = array[i]*2
        console.log(sum)
    } else {
        console.log('negativan je broj')
    }
}
console.log('zavrsen zadatak 2')
//3 zadatak
const niz=[4, 2, 2, -1, 6];
let smallest = niz[0];

for(i=1; i<niz.length; i++){
    if(niz[i] < smallest){
        smallest = niz[i];   
    }
}

console.log(`index is ${i-2} number is ${smallest}`);
console.log('zavrsen zadatak 3')

//4 zadatak

const zadatak4= [4, 2, 2, -1, 6,];
let najmanji = niz[0];
let drugiNajmanji=0;

for (i = 0; i < zadatak4.length; i++) {
    if(zadatak4[i]==najmanji){
      drugiNajmanji=najmanji;
    } else if (zadatak4[i] < najmanji) {
        drugiNajmanji = najmanji;
        najmanji = zadatak4[i];
    } else if (zadatak4[i] < drugiNajmanji) {
        drugiNajmanji = zadatak4[i];
    }
}
console.log(drugiNajmanji)

console.log('zavrsen zadatak 4')

//5 zadatak

const zadatak5=[3, 11, -5, -3, 2];
let suma=0;
for ( i = 0; i <= zadatak5.length; i++) {
    if (zadatak5[i] > 0) {
        suma += zadatak5[i];
    }
}

console.log(suma); 
console.log('zadatak 5 gotov');

//6 zadatak
//Gorane za ovaj mi treba pomoc, stavio sam break jer ako ga ne stavim proverava mi svaku stavku u array-u i onda za svaku pojedinacno izbacuje
//true ili false, a jasno mi je da sa ovim break-om u sustini cim dodje do index 0 i ustanovi true ili false mi se kod prekida, sto nije bas dobro.
//ne znam kako bi taj deo resio,  nemam ideju

let mat=[2, 4, -2, 7, -2, 4, 2];
const mat1=[2, 4, -2, 7];
let matunazad=[3, 4, 12, 8];
const tekst = 'The array is symmetric - ';
for (i=0; i<mat1.length;i++){
        
        if (mat1[i]==matunazad[i]){
            console.log(tekst+true)
            break
        } else {
           console.log(tekst+false)
           break
        }
}

console.log('gotov 6 zadatak')

//7 zadatak

const parce1=[4, 5, 6, 2]; 
const parce2=[3, 8, 11, 9];
const zajedno=[];
for (i=0;i<parce1.length;i++){
        zajedno.push(parce1[i],parce2[i])
}
console.log(zajedno)
console.log('zavrsen 7 zadatak')

//8 zadatak

const privarray=[4, 5, 6, 2]; 
const drugiarray=[3, 8, 11, 9];

for(let i=0; i<drugiarray.length; i++) {
    privarray.push(drugiarray[i]);
}
  console.log(privarray)
console.log('zadatak 8 gotov')

// 9 zadatak
//ovaj nisam umeo sam da resim i nasao sam resenje na netu koje sam prilagodio, ako bude vremena pitacu te na casu 

var ovajmodifikujem = [4, 6, 2, 8, 2, 2];
var ovdebrisem = [];

for(i=0;i<ovajmodifikujem.length;i++){
    if(ovajmodifikujem[i]===2){ 
        ovdebrisem.push(i); 
    
    }
}

for (var j = ovdebrisem.length -1; j >= 0; j--){
    ovajmodifikujem.splice(ovdebrisem[j],1);
}

console.log(ovajmodifikujem)
console.log('zadatak 9 gotov')

//10 zadatak


const zadatak10=[2, -2, 33, 12, 5, 8];
let e =78;


for (i=0; i<zadatak10.length; i++){
    zadatak10.splice(3, 0, e);
    break
}

console.log(zadatak10)