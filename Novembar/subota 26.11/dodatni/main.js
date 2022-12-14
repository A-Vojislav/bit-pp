// 1. Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.
// Examples:
// numThenChar([[1, 2, 4, 3, "a", "b"], [6, "c", 5], [7, "d"], ["f", "e", 8] ]) ➞ [[1, 2, 3, 4, 5, 6], [7, 8, "a"], ["b", "c"], ["d", "e", "f"]]
// numThenChar([[1, 2, 4.4, "f", "a", "b"], [0], [0.5, "d","X",3,"s"], ["f", "e", 8], ["p","Y","Z"], [12,18]]) ➞ 
// [[0, 0.5, 1, 2, 3, 4.4], [8], [12, 18, "X", "Y", "Z"], ["a", "b", "d"], ["e", "f", "f"], ["p", "s"]]



// 2. Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.
// Triangle fits if it has the same or smaller size as the hole.
// The function should return false if the triangle with that dimensions is not possible.
// Examples:
// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false


function task2(firstTriangle,secondTriangle) {
    let print=`The triangle doesent fit`;

        if( firstTriangle[0] <= secondTriangle[0]&&
            firstTriangle[1] <= secondTriangle[1]&&
            firstTriangle[2] <= secondTriangle[2]){

            print = `The triangle fits`;
            }

    return print
}

console.log(task2([1, 5, 1], [1, 3, 1]));





// 3. Create a function that takes a string as an argument and returns true if each letter in the string is surrounded by a plus sign. Return false otherwise. For clarity, each letter must have a plus sign on both sides.
// Examples:
// plusSign("+f+d+c+#+f+") ➞ true
// plusSign("+d+=3=+s+") ➞ true
// plusSign("f++d+g+8+") ➞ false
// plusSign("+s+7+fg+r+8+") ➞ false







// 4. Create a function that takes a 5x5 2D array and returns true if it has at least one Bingo, and false if it doesn't.
// Only check for diagonals, horizontals and verticals.
// Examples:
// bingoCheck([
//   [45, "x", 31, 74, 87],
//   [64, "x", 47, 32, 90],
//   [37, "x", 68, 83, 54],
//   [67, "x", 98, 39, 44],
//   [21, "x", 24, 30, 52]
// ]) ➞ true
// bingoCheck([
//   ["x", 43, 31, 74, 87],
//   [64, "x", 47, 32, 90],
//   [37, 65, "x", 83, 54],
//   [67, 98, 39, "x", 44],
//   [21, 59, 24, 30, "x"]
// ]) ➞ true
// bingoCheck([
//   ["x", "x", "x", "x", "x"],
//   [64, 12, 47, 32, 90],
//   [37, 16, 68, 83, 54],
//   [67, 19, 98, 39, 44],
//   [21, 75, 24, 30, 52]
// ]) ➞ true
// bingoCheck([
//   [45, "x", 31, 74, 87],
//   [64, 78, 47, "x", 90],
//   [37, "x", 68, 83, 54],
//   [67, "x", 98, "x", 44],
//   [21, "x", 24, 30, 52]
// ]) ➞ false


function task4(input) {

    let result = false;
    let win= `It's a BINGO!!!!!`
    let diagonalCounter = 0;

    for (let i = 0; i < input.length; i++) {
        let horisontalCounter = 0;
        let verticalCounter = 0;

        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] == "x") {   
                horisontalCounter++;
            }
            if (input[j][i] == "x") {   
                verticalCounter++;
            }
            if (input[j][i] == input[j][i] && input[j][i] == "x") { 
                diagonalCounter++;
            }
        }
        if(horisontalCounter == 5){
            result = win;
            break;
        }
        if(verticalCounter == 5){
            result = win;
            break;
        }

    }
    if(diagonalCounter == 5){
        result = win;
      }


    return result;
}
console.log(task4([
    ["x", 43, 31, 74, 87],
    [64, "x", 47, 32, 90],
    [37, 65, "x", 83, 54],
    [67, 98, 39, "x", 44],
    [21, 59, 24, 30, "x"]
    ]));







// 5. When a person receives a blood transfusion, it is essential to make sure that the donor's blood type is compatible with the receiver's blood type.
// Receiving a blood type that is not compatible with your own can be life-threating,
// so blood banks always make sure to note the type of blood they receive from donors so that they can ensure a safe transfusion.
// Blood types are named according to three factors: presence of antigen A,
// presence of antigen B, and presence of Rh factor. If antigen A is found, the blood type includes the letter "A".
// If antigen B is found, the blood type includes the letter "B". And if the Rh factor is present, the blood type ends with "+"; otherwise, it ends with "-".
// If neither antigen A nor antigen B are found, the blood type includes the letter "O".
// For example, a person with only antigen A would have the blood type "A-".
// A person with both antigens A and B and the Rh factor would have blood type "AB+",
// and a person wih only the Rh factor would have blood type "O+".
// The rules for giving and receiving blood are as follows:
// A person with antigen A may only give blood to another person with antigen A.
// A person with antigen B may only give blood to another person with antigen B.
// A person with the Rh factor may only give blood to another person with the Rh factor.
// A person with none of the above factors (O-) can give blood to anyone.
// Write a function that takes in a donor's and receiver's blood types as strings and returns whether or not the donor can safely give blood to the receiver, according to the rules above. For clarity: all letters are capital and each blood type will be one of the following strings: "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-".
// Examples:
// canGiveBlood("O+", "A+") ➞ true
// canGiveBlood("A-", "B-") ➞ false
// canGiveBlood("A-", "AB+") ➞ true
// .

let bloodOkOrNot=function(donor, receiver){
    let bloodOk=`the type of blood is compatible for the reciver`;
    let forbiden='the blood types are not compatable';


        if (donor=='A'){
            donor='A-'
        } else if(donor=='B'){
            donor='B-'
        } else if (donor=='AB'){
            donor='AB+'
        }else if(donor.includes('+')){
            donor='O+'
        } 
        function testParameters(){

            if (donor==receiver || donor=='O-'){
                return bloodOk
            } 
            if(receiver=='O-' && donor!='O-'){
                return forbiden
            }

            if (donor=='O+' && receiver=='AB+' || receiver=='A+'||receiver=='B+'){
                return bloodOk
            } else if(donor=='B-' && receiver=='AB+'||receiver=='AB-'||receiver=='B+'||receiver=='B-'){
                return bloodOk
            } else if(donor=='B+' && receiver=='AB+'){
                return bloodOk
            } else if(donor=='A-' && receiver=='AB+' || receiver=='AB-'|| receiver=='A+'){
                return bloodOk
            } else if(donor=='A+' && receiver=='AB+' ){
                return bloodOk
            } else if(donor=='AB-' && receiver=='AB+'){
                return bloodOk
            } else{
                return forbiden
            }
    }
    return testParameters()
}

 console.log(bloodOkOrNot('A','AB+'))