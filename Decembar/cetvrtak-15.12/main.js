function printExternal(){
    console.log('i odavde mogu da ispisujem');
}

printExternal();

function navigatorInfo(){
console.log(window.navigator.platform);
console.log(window.navigator.vendor);
console.log(window.navigator.appVersion);

}

navigatorInfo()

function isOnline(){
    if(window.navigator.onLine==true){
        console.log('we are online');
    } else console.log('we are offline');
}

isOnline()

function widthAndHeight(){
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);
}

function locationData(){
    console.log(window.location.href);
    console.log(window.location.host);
    console.log(window.location.protocol);
    console.log(window.location.port);
}

locationData()


function reload(){
    window.location.reload
}


function goTo(){
    window.open('https://a-vojislav.github.io/index.html')
}


function passedData(){
    window.localStorage.setItem('passed data', 'this is past')
}
passedData()

function readData(){
    console.log(window.localStorage.getItem('passed data'))

}
readData()





function passedDataRoaming(){
    
    window.sessionStorage.setItem('passed data', 'this is past')
}
passedDataRoaming()

function readDataRoaming(){
    console.log(window.sessionStorage.getItem('passed data'))

}
readDataRoaming()


function twoPagesBack(){
    window.history.back()
    window.history.back()
}
// twoPagesBack()

alert('welcome')

let question = prompt("What is your name", "i couldnt think of anything else");

if (question !== null) {
  alert(
  "We will submit this this answer now " + question + " ! enjoy your stay");
}
let output=[];
let output2=[];
let output3=[];
let output4=[];

function math(min, max) {

    for( let i =0; i<10;i++){
        output.push(Math.random() * (max - min) ) + min; 
    }
    for ( let i=0; i<output.length;i++){
        output2[i]=output[i].toFixed(2)
    }
    for (let i=0; i<output.length;i++){
        output3[i]=Math.floor(output[i])
    }

    return `
    Math random 10-50 :${output} 

    Math random rounded : ${output2}
    
    Math random Floor : ${output3}
    
    Math MAX : ${Math.max(...output3)}`
  }
console.log(math(10,50));

let timeNow=new Date();
let time= timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
let date= timeNow.getFullYear()+'-'+(timeNow.getMonth()+1)+'-'+timeNow.getDate()

console.log(new Date)
console.log(time)
console.log(date)


// Samo da pitam, jesi dobio epilepsiju kada si pokrenuo sve ovo? :D Taj deo vam nisam rekao a mozda ste pretpostavili, ovo se izvrsava sve odjednom i krece ludilo.
// Nemam da sta dodam ili oduzmem, samo cepaj.
