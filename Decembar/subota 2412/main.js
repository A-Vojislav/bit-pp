// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.


function reverseANumber(n){

    n = n + "";
    return n.split("").reverse().join("");

}
console.log(Number(reverseANumber(32243)))

// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

function sort(string) {
    return string.split('').sort().join('');
};
console.log(sort('fjeowhvwoe'));

// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.


function task3(input){
    return input.split('').sort().join('');
}

console.log(task3('Republic Of Serbia'))

// 4. Write a function to split a string and convert it into an array of words.
// &quot;John Snow&quot; -&gt; [ &#39;John&#39;, &#39;Snow&#39; ]

function task4(input){
    return input.split(' ')
}
console.log(task4('John Snow'))

// 5. Write a function to convert a string to its abbreviated form.
// &quot;John Snow&quot; -&gt; &quot;John S.&quot;

function task5(input){
    var split_names = input. trim(). split(' ');
    if (split_names. length > 1) {
    return (split_names[0] + ' ' + split_names[1]. charAt(0) + '.');

    }
}
console.log(task5('John Snow'))

// 6. Write a function that adds string to the left 
// or right of string, by replacing it’s characters.

function task6(input,replaceWith,direction){

    let amountOfO=input.length-replaceWith.length

    if(direction=='l'){
      output =  input[0].repeat(amountOfO)+replaceWith
    } else if(direction='d'){
        output = replaceWith+input[0].repeat(amountOfO)
    }
    return output
}
console.log(task6('000000000', '123', 'd'))


// 7. Write a function to capitalize the first letter of a string and returns modified string.

function task7(input){
    const output = input.charAt(0).toUpperCase() + input.slice(1);
    return output
    
}

console.log(task7('js string exercises'))


// 8. Write a function to hide email addresses to protect them from unauthorized users.

function task8(email){
    let splitted = email.split('@');
    let part1 = splitted[0];
    let avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + '...@' + part2;
}
console.log(task8('somerandomaddress@example.com'))

//9 Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.

function task9 (input){
    let output = "";
    for(let i = 0; i<input.length; i++){
        if(input[i] === input[i].toLowerCase()){
            output += input[i].toUpperCase();
        }else {
            output += input[i].toLowerCase();
        }
    }

    return output;

}

console.log(task9('The Quick Brown Fox'))

