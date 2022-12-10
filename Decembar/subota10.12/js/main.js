// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

const coffeDream = {
    first: 'Water',
    second: 'Milled coffee',
    third: '2 kasicice coffee',
}

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

const favouriteMovie= {
    movie: 'Marvel`s Avengers',
    ReleaseDate: 'May 2, 2012 (Serbia)',
    Director: 'Joss Whedon',
    StoryBy: 'Joss Whedon, Stan Lee, Jack Kirby, Zak Penn',
    Actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Tom Hiddleston , Samuel L. Jackson',
    Gendre: 'Fantasy'
}


// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.



function createObject (descrption,programmingLanguage,gitRepository,){
    const project={}
    project.descrption=descrption;
    project.programmingLanguage=programmingLanguage;
    project.gitRepository=gitRepository;
    
    project.language=function (programmingLanguage){
        if (programmingLanguage=='javaScript'){
            project.language= `correct language used`
        } else{
            project.language= `The language used is not javaScript`
    }
}
    project.language()
    project.status=function (descrption,programmingLanguage,gitRepository){
        if(descrption=='' && programmingLanguage=='' && gitRepository==''){
        project.status= 'It seams the project is complete';
        } else {
            project.status=`project not complete`;
        }
    }
    project.status()

     return project
}
console.log(createObject( 'Coffee', 'javaScript', 'gitlink'))



// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

function task4(name, cuisine,complexity,listIngridients,prepTime,prepInstruction){
    const printObject={};
    printObject.name=name;
    printObject.cuisine=cuisine;
    printObject.complexity=complexity;
    printObject.listIngridients=listIngridients;
    printObject.prepTime=prepTime;
    printObject.prepInstruction=prepInstruction;

    printObject.check= function(){
        if(printObject.prepTime<=15){
        printObject.check=`it can be prepared in less then 15 minutes`;
        } else {
            printObject.check=`it takes ${prepTime} to prepare the meal`
        }
    printObject.check();
    }
    printObject.cuisineChange=function(){
        return printObject.cuisine='Serbian';
    }
    printObject.cuisineChange()

    printObject.removeOne=function(){
        return printObject.listIngridients.pop();
    }

    printObject.removeOne()

    return JSON.stringify(printObject)
}

console.log(task4('Sataras','domaca','lako', ['ulje','jaja','so','paprika','paradajz','kobaje'],10,
'prvo staviti u vreo tiganj ulje, kobaje, papriku i paradajz, kad se to spremi dodati jaja'))