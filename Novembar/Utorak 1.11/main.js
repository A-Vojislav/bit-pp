// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes


function jelIma(e,array){
    for (let i=0; i<array.length; i++){
        if(array[i]==e){
            result=`Array contains ${e} `
            break
        } else{
            result= `False`
        }
    }return result
}
console.log(jelIma(3, [5,-4.2,3,7]))

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function pomnoziPozitivne (x){
    for (let i=0; i<x.length; i++)
    if (x[i]>0) {
       x[i]*=2
}return x
}

console.log(pomnoziPozitivne([-3, 11, 5, 3.4, -8]))

// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

const niz = [4,2,2,-1,6]
function nadjiMinimum(niz) {
    
    let smallest = niz[0]

    for (i = 0; i < niz.length; i++) {
        if (niz[i] < smallest) {
            smallest = niz[i]
        }
    }
// Komentar: kako znas da je bas na i - 2 indeksu najmanji? ;) 
//sad kad kazes stvarno ne znam, nego mi bez toga izbacuje da je index 5, a trebalo bi 3 jer array pocinje od 0
    return (`index is ${i} number is ${smallest}`)
}
console.log(nadjiMinimum(niz))

// 4. Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2


function nadjiDrugiNajmanji(array) {
    let najmanji = niz[0];
    let drugiNajmanji = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] == najmanji) {
            drugiNajmanji = najmanji;
        } else if (array[i] < najmanji) {
            drugiNajmanji = najmanji;
            najmanji = array[i];
        } else if (array[i] < drugiNajmanji) {
            drugiNajmanji = array[i];
        }
    }
    return drugiNajmanji
}
console.log(nadjiDrugiNajmanji([4, 2, 2, -1, 6,]))


// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumaAreja(array,rezultat){
    for (let i=0; i<array.length; i++){
        if(array[i]>0){
            rezultat+=array[i];
        }
    }return rezultat
}
console.log(sumaAreja([3, 11, -5, -3, 2],0))

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

function jelSimetrican(array){ 
    let isSymmetric = false;
    let j = array.length -1;
    for(let i = 0; i< array.length; i++) {
        if (i == j) {
            break;
        }
        if (array[i] == array[j]) {
            isSymmetric = true;
        } else {
            isSymmetric = false;
            break;
        }
    
        j--;
    }
    
    //KOMENTAR: Lepo si uradio, samo bih ja preradio da ne prolazis kroz ceo niz nego samo do polovine.
    // Nepotrebno je da prolazis kroz ceo iz razloga sto ako je leva polovina jednaka desnoj - niz je simetrican. 
    // Ako je niz sa neparnim brojem elemenata - polovinu niza smatraj da je ceo broj. Primer: niz ima 7 elemenata, polovinu smatras da je 3.
    // Za takav niz bi isao od prvog do treceg clana niza od pocetka i proveravao da li je jednak od prvog do treceg ali od pozadi.
    // Tvoje resenje je apsolutno tacno i radi, nego samo kazem da si mogao na jos jedan nacin ;)
    //Hvala za sugestiju, sad sam se setio da si mi to rekao i prosli put nego mi je isparilo. dakle sad ovde ovde mogu da dodam /2
    //i to bi bilo optimizovanije resenje
    return isSymmetric
}
console.log('6.'+jelSimetrican([2, 4, -2, 7, -2, 4, 2]));

function jelSimetrican2(array){ 
    let isSymmetric = false;
    let j = array.length -1;
    for(let i = 0; i< array.length; i++) {
        if (i == j) {
            break;
        }
        if ((array[i]/2) == (array[j])/2) {
            isSymmetric = true;
        } else {
            isSymmetric = false;
            break;
        }
    
        j--;
    }
    return isSymmetric
}
console.log('6.2.'+jelSimetrican2([2, 4, -2, 7, -2, 4, 2]))
// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function izmesaj(array1,array2){

     const zajedno=[];
    for (i=0;i<array1.length;i++){
         zajedno.push(array1[i],array2[i])
    }
    return zajedno;
    }

console.log(izmesaj([4, 5, 6, 2],[3, 8, 11, 9]));

// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenate(array1,array2) {

    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i])
    }
    return array1;
}

console.log(concatenate([4, 5, 6, 2],[3, 8, 11, 9]));

// 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]
function ObrisiJedan(array,e){

var result = [];
for(var i =0; i<array.length;i++) {
    if (array[i] != e) {
        result.push(array[i])
    }
}

return result;
}
console.log(ObrisiJedan([4, 6, 2, 8, 2, 2],2));

// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

let e = 78;
let p = 3;
let array = [2, -2, 33, 12, 5, 8];

function ubaciuArray (array,e,p){
if (p > array.length) {
    console.log('Position number is greater than array length')
}

for (i=0; i<array.length; i++){
    array.splice(3, 0, e);
    break
}

return array
}
console.log(ubaciuArray(array,e,p));
