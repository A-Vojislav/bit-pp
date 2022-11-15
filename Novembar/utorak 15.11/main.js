function checkPassword(input) {
    let upperCase = 'There is no uppercase letter in your password!';
    let lowerCase = 'There is no lowercase letter in your password!';
    let isNumberThere= 'There is no number in your password!'
    let noCharacterRepeating=true;
    let passwordLength = "Length must be between 6 and 24 characters!";
    let checkForNumber= input.split('')
    let finalCheck='';

        if(input.length > 6 && input.length < 24) {
            passwordLength=true;
        } 

        for (i=0; i<input.length;i++){
            if (input[i]==input[i].toUpperCase()){
                upperCase=true;
            }
        }

        for (i=0; i<input.length;i++){
            if (input[i]==input[i].toLowerCase()){
                lowerCase=true;
            }
        }
        
        for (i=0; i<input.length;i++){
            if(Number.isInteger(parseInt(checkForNumber[i]))){
                isNumberThere=true;
            }
        }

        for (i=0;i<input.length;i++){
            if(input[i]==input[i+1] && input[i]==input[i+2]){
               noCharacterRepeating='You have a character repeating more then 2 times, devirsify your password!';
            } 
        }

        if(passwordLength == true && upperCase == true && lowerCase == true && isNumberThere == true && noCharacterRepeating ==true){
            finalCheck= `Your password is up to our standards`
        } else{
            finalCheck=`Please check password requirements`
        }

    console.log(`
    Password requrements:
    
    Password length: ${passwordLength}
    Uppercase: ${upperCase}
    Lowercase letters: ${lowerCase}
    Number characters: ${isNumberThere}
    No repeating Characters: ${noCharacterRepeating}

    Revision of password: ${finalCheck}
    `)

        
}

checkPassword('Vojislav1991')
