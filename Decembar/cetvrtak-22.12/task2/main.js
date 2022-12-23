
const no1= document.getElementById('active');


function task1(){
    no1.classList.remove('active');
document.querySelector('li').classList.add('active')
}
task1()

const alertThis= document.getElementById('alert').textContent
function task2(){
    alert(`${alertThis}`)
}

//task2()


function task3(){
    
    document.getElementById("textChange").innerHTML = "i want this to be writen!";
}
task3()

//taskInnerHtml()

function taskInnerHtml(){
    document.getElementById("myDropdown").classList.toggle("show");
}