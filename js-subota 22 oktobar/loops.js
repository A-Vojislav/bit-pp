//1 zadatak

for (let x=1; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }   else if (x % 2 === 0) {
            console.log(x + " is even");   
    }   else if (x%2 !==0) {
        console.log(x+" is odd")
    }
}

//2 zadatak

let sum = 0;
for (let i = 0; i < 1000; i++)
{
    if (i % 3 === 0 && i % 5 === 0)
    {
       sum += i;
    }
}
console.log(sum);

//3 zadatak


result=1;
for (let i = 0; i <= 10; i++) {
    result=i*i;
    console.log(result);
}

//4 zadatak

const mojarray=[1,25,7,8,6,9,351,10,72]
let sabiranje=0;
let mnozenje=1;

for (let i=0; i<mojarray.length;i++){
    sabiranje+=mojarray[i];
    mnozenje*=mojarray[i];
    console.log(`Rezultat sabiranja : ${sabiranje} , rezultat mnozenja: ${mnozenje} `)
}

//5 zadatak

var x = ["1",'A','B','c','r',true,NaN,undefined];
let suma=[];
for ( let i=0; i<x.length; i++){

suma+=x[i];

}
console.log(suma)

//6 zadatak

var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];

    for (i in a) 
    {
       console.log("row " + i);
       for (j in a[i]) 
         {
          console.log(" " + a[i][j]);
         }
    }

//7 zadatak

result=1;
for (let i = 0; i <= 20; i++) {
    result=i*i;

}
console.log(result);
//8 zadatak

let ocene = [80, 77, 88, 95, 68];
var prosek = 0;
var a = 0;
for (i=0; i < ocene.length; i++) {
        prosek += ocene[i];
        a = prosek/ocene.length
}
if (a < 60){
    console.log(a+'F');
    }
  else if (a < 70) {
    console.log(a+' D');
    }
  else if (a < 80) {
    console.log(a+' C');
  }
  else if (a < 90) {
    console.log(a+' B');
  }
  else if (a < 100) {
    console.log(a+' A');
  }

  //9 zadatak

  for( i=1; i<=100;i++){
    let x=i%3;
    let y=i%5;
        if(x==0 && y==0){
            console.log (`num ${i}=Fizzbuzz`);
        } else if(y==0){
            console.log(`num ${i}=buzz`);
        } else if (x==0 ){
            console.log (`num ${i}=Fizz`);
        }

}