    var multiplyByTwo = function (inputArray) {
        var newArray = [];
        for (var i = 0; i < inputArray.length; i++) {
            var element = inputArray[i];
            newArray[i] = (element * 2) + 1;
        }
        return newArray;
    }

    // function addOne(a) {
    //     return a + 1;
    // }// Let's test these functions:

    var inputOne = [1, 2, 3];
    var outputArray = multiplyByTwo(inputOne);
    console.log(outputArray); // [2, 4, 6]// 
    //var outputNum = addOne(100);
    // console.log(outputNum); // 101// Now, let's say you want to have an array, myarr,
    // that contains three elements, and each of the elements
    // is to be passed through both functions
    
    var inputTwo = [10, 20, 30];
    var myarr = multiplyByTwo(inputTwo);
    console.log(myarr);

    // Now, loop through each element, passing it to addOne()// for (var i = 0; i < 3; i++) {
    //     myarr[i] = addOne(myarr[i]);
    // }

    console.log(multiplyByTwo([21, 41, 61])); // [21, 41, 61]
