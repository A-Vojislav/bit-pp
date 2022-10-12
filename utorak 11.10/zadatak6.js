let age, myage;
age=15;
myage=18;

if (age > myage) {
    console.log('i am '+(myage-age)+' years older then her');
} else if (age<myage) {
    console.log('she is '+ (-age+myage) +' years younger then me');
} else if(age==myage){
    console.log('we are the same age')
}