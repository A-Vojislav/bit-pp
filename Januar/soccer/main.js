const playerBox=document.getElementById('field');
const player=document.getElementById('player');
const button=document.getElementById('stopMoving');
let movement=true;

function playerPositionHandler(event){
    let x=event.x;
    let y=event.y-40;

    player.style.top=y+'px';
    player.style.left=x+'px';
}
function buttonHandler(){
    if(movement){
        playerBox.removeEventListener('click', playerPositionHandler)
        button.textContent='Enable'
        movement=false;
    } else{
        playerBox.addEventListener('click', playerPositionHandler);
        button.textContent='Stop moving';
        movement=true
    }
}

button.addEventListener('click', buttonHandler);

playerBox.addEventListener('click', playerPositionHandler);