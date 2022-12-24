
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


function addRow() {
    const div = document.createElement('div');
  
    div.className = 'row';
  
    div.innerHTML = `
    <select name="Dropdown" id="drop">
    <option value="Option1"><a href="">Link 1</a></option>
    <option value="Option2"><a href="">Link 2</a></option>
    </select>
    `;
  
    document.getElementById('section').appendChild(div);
  }

  addRow()


  function Validate() {
    var name = document.getElementsByClassName("name");
    if (name[0].value==''){
        name[0].style.border="1px solid red"
    } else{
        name[0].style.border=""
    }
    name[0].focus();
}
  