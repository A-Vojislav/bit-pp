// 1. Write a function named tellFortune that:
//  takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
//  outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N kids.&quot;
// Call that function 3 times with 3 different values for the arguments.

function tellFortune (pName,kids,location,job){
    kids = Math.floor(Math.random()*5);
    job = Math.floor(Math.random()*4);
    if (job==0) job='Dog behaviour consultant';
        else if (job==1) job='Programer';
        else if (job==2) job='Retail worker';
        else if (job==3) job='Electronic repairman';

    location = Math.floor(Math.random()*4);
        if (location==0) location='Valjevo';
        else if (location==1) location='Beograd';
        else if (location==2) location='Nis';
        else if (location==3) location='Kikinda';


    console.log(`You will be a ${job} in ${location}, married with ${pName} with ${kids} kids`)
}
tellFortune('Tijana','Vojislav','Beograd','Business owner')
tellFortune('Tijana','Vojislav','Beograd','Business owner')
tellFortune('Tijana','Vojislav','Beograd','Business owner')


// 2. Write a function named calculateDogAge that:
//  takes 1 argument: your puppy&#39;s age.
//  calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
//  outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
// years.

function calculateDogAge(input){
    result=`Your doggo has ${input} in human years, but in dog years he/she has ${input*7}`
    console.log(result)
}
calculateDogAge(15)
calculateDogAge(11)
calculateDogAge(1)


// 3. Write a function named calculateSupply that:
//  takes 2 arguments: age, amount per day.
//  calculates the amount consumed for rest of the life (based on a constant max age).
//  outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
// X&quot;
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(item, age){
    const ageMax= 100;


    console.log (`you will need ${(ageMax-age)*365} of ${item} to last you until the ripe old of ${ageMax}`);
}

calculateSupply('row of chocolate',33);
calculateSupply('a liter of water',33);
calculateSupply('bread',33);

// 4. Create a function called celsiusToFahrenheit:
//  Store a celsius temperature into a variable.
//  Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.
// Create a function called fahrenheitToCelsius:
//  Now store a fahrenheit temperature into a variable.
//  Convert it to celsius and output &quot;NN°F is NN°C.&quot;
// *NN is actual temperature you need to convert

function celsiusToFahrenheit(input){
    result=(input-32)*5/9
    console.log(`in Celsius ${input} degrees is ${result} in Fahrenheit`)
}
celsiusToFahrenheit(21)

function fahrenheitToCelsius(input){
    result= input*1.8+32 
    console.log(`in Fahrenhein ${input} degrees is ${result} in Celsius`)
}
fahrenheitToCelsius(60)

// 6. Create a function that finds how many prime numbers there are, up to the given integer.
// Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
// primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
// primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

function howManyPrime(input) {
    let result = [];

    for (let i = 2; i <= input; i++) {
        let isPrime = false;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && i != j) {
                isPrime = true;
                break;
            }
        }

        if (!isPrime) {
            result.push(i)
        }
    }

    console.log(`There are ${result.length} prime numbers: ` + result);
}

howManyPrime(11)



// 7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
// reduces back to 1. Items in the arrays will be the same as the length of the arrays.

function makeDiamondArr(input){
    let result=[];
    let pushArr=function(result,i){
        for (let j=1; j<=i;j++ ){
            result.push(i)
        }
    }

    for (let i=1;i<=input;i++){
        pushArr(result,i);
    }
    for(let i=input-1;i>=1;i--){
        pushArr(result,i)
    }
    return result
}

console.log(makeDiamondArr(3))
