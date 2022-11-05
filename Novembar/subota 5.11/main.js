// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
const myarray=[ 3, 500, 12, 149, 53, 414, 1, 19 ];


function task1(myarray,min,max){
    max=Math.max(...myarray);
    min=Math.min(...myarray);
   return `${max}, ${min}`

}
console.log(task1([ 3, 500, 12, 149, 53, 414, 1, 19 ]))


// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function task2(input){
    const b = [];
    for(var i = 0; i < input.lenght; i++) {
        if(input[i] > 0) {
            b.push((input[i]/2)+5);
        } else if (input[i] === 0) {
            b.push(20);
        }
    } return b
}
console.log(task2([ 3, 500, -10, 149, 53, 414, 1, 19 ]))

// 3. Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:
// 51-60 -&gt; 6,
// 61-70 -&gt; 7,
// 71-80 -&gt; 8,
// 81-90 -&gt; 9,
// 91-100 -&gt; 10.
// Input:
// [ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
// 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
// the exam.


// const students=['Michel','Anne','Frank','Joe','John','David', 'Mark','Bill'];
// const grades=[50,39,63,72,99,51,83,59];

function task3(students,grades){
    console.log('ovo je pocetak samo')
    for (let i=0; i<students.length;i++){
        if (grades[i] < 60){
            console.log(`${students[i]} acquired ${grades[i]} and earned 6`);
        }  else if (grades[i] < 70) {
                console.log(`${students[i]} acquired ${grades[i]} and earned 7`);
        } else if (grades[i] < 80) {
                console.log(`${students[i]} acquired ${grades[i]} and earned 8`);
        } else if (grades[i] < 90) {
                console.log(`${students[i]} acquired ${grades[i]} and earned 9`);
        } else if (grades[i] < 100) {
                console.log(`${students[i]} acquired ${grades[i]} and earned 10`); 
        } else if (grades[i]>60){
                console.log(`${students[i]} acquired ${grades[i]} and failed the exam`);
        }
    }  return `resi me`;
}
console.log(task3(['Michel','Anne','Frank','Joe','John','David', 'Mark','Bill'],[50,39,63,72,99,51,83,59]))

// 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array&#39;s values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]


function task4 (array) {
    const sorted = array.sort(function(a, b) { return a - b});
    const multiplied = []
    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] > 0) {
            multiplied.push(sorted[i]*2)
        }
    } return multiplied
} console.log(task4([13, 11, 15, 5, 6, 1, 8, 12]))

// 5. (skip :))Sort a previously defined array in a descending order and display it in the
// console.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function task5(input){
    const sort = input.sort(function(a, b) {
         return a - b
        });
    const sortirano = [];
    for (let i = sort.length - 1; i >= 0; i--) {
        sortirano.push(sort[i])
    } return sortirano;
}
console.log(task5([ 13, 11, 15, 5, 6, 1, 8, 12 ]))

// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2350000

function task6(){
    let sum=0;
    let sumneg=0;
    for (let i=0; i<=1000;i++){
        if (i % 2 == 0){ 
            sum += i;
        } 
    }
    for (let i=0; i<=500;i++ ){
        if(i%2!==0){
            sumneg-=i;
        }
    }
    return (sum+sumneg)*12.5
}

console.log(task6())

// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
//     letters) in the array and create a new string from them. Print it out in the console.
//     Input: [ &quot;M&quot;, &quot;Anne&quot;, 12, &quot;Steve&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, true, &quot;A&quot; ]
    
//     Output: AnStJoJoDaMa

function task7 (array){
    let result='';
    for(let i=0; i<array.length;i++){
        if(typeof(array[i]) == 'string' && array[i].length>2){
            result+=array[i].slice(0, 2);
        }
        
    }
    return result;
}
console.log(task7(['M','Anne',12,'Steve','Joe','John','David','Mark',true,'A']));

// 8. Write a program that takes a string and prints its characters out in reversed order in the
// console.
// Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function task8(input){
    let newString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        newString += input[i];
    }
    return newString;
}
console.log(task8('Belgrade Institute of Technology'));

// 9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don&#39;t display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function task9(){
    let result;
    const combinations = [1, 2, 3, 4, 5, 6, 7]
    for(let i = 0; i < combinations.length - 1; i++){
      for(let j = i + 1; j < combinations.length; j++){
            
           console.log(combinations[i], combinations[j]);
           result=i+j
      } 
    } return '\n'+'Number of repeats:'+result;
} 
console.log(task9())

// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
//     by 1 and by itself).
//     Input: 17 | 15
//     Output: true | false

function isPrime(number)
{ 
  if (number <= 1){
  return false;
  } else if (number <= 3){
  return true;
  } else if (number%2 == 0 || number%3 == 0){
  return false;
}

  return true;
}
console.log(isPrime(17) +'|' + isPrime(15));

// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true

function symetry (a) {
    var b = [];
    var res = 'yes'
        for (let i = a.length; i >= 0; i--) {
            b.push(a[i])
            if(a[i] === b[i]) {
                res = 'The string is a palindrome'
            }
            else if (a[i] !== b[i]) {
                res = 'The string is not a palindrome'
            }
        }  return res
    }
        console.log(symetry(['a nut for a jar of tuna']));
    //have to remove the spaces
