// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Output: [1, 21, 42, 1000]


const array=['1','21',undefined,'42','1e+3',Infinity];

function filtriraj(array){
    let result = [];
    let brojac = 0;

    for (let i = 0; i < array.length; i++) {
       if (isNaN(array[i])) {
        continue;
      } else if (array[i] === undefined) {
        continue;
      } else if (array[i] === Infinity) {
        continue;
      } else {
        result[brojac] = +array[i];
        brojac++;
      }
    }
    return result;
}
console.log(filtriraj(['1','21',undefined,'42','1e+3',Infinity]));

// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.



function remove(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (isNaN(arr[i]) || arr[i] === 0 || arr[i] === "" || arr[i] === undefined || arr[i] === null) {

            arr.splice(i, 1);
        }
    }

    return arr.join('');
}

console.log(remove([NaN, 0, 15, false, -22, '', undefined, 47, null]));


// 3. Write a program to filter out falsy values from the array.


function filterFalsy2(array) {
    let result = [];
    let brojac = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result[brojac] = array[i];
        brojac++;
      }
    }

    return result;
  }
  console.log(filterFalsy2([NaN, 0, 15, false, -22, "", undefined, 47, null]));


//4. Write a program that calculates a number of integer values in the array.
//nije mi jasno kako da dobijem 3 kad je rezultat sabiranja 26,6, pa zbog toga delim sa 10
function izracunajVrednostAreja(array){
    let result = [];
    let total=0;
    let brojac = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result[brojac] = array[i];
        brojac++;
      }
    }
// return result
        for (let i = 0; i < result.length; i++){ 
         total += result[i]; 
        }
        return Math.round(total/10)
}

console.log(izracunajVrednostAreja([NaN,23.1,15,false,-22.5,'',4,7,null]))

//5. Write a program that calculates a number of float values in the array.
//nije mi jasno kako je vrednost 2 kad se sabira 26.6 te koristim math trunk kako bi dobio trazeni rezultat
function izracunajVrednostArejaFloat(array){
    let result = [];
    let total=0;
    let brojac = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result[brojac] = array[i];
        brojac++;
      }
    }
// return result
        for (let i = 0; i < result.length; i++){ 
         total += result[i]; 
        }
        return Math.trunc(total/10)
}

console.log(izracunajVrednostArejaFloat([NaN,23.1,15,false,-22.5,'',4,7,null]))

