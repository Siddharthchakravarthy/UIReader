// first constants na declare maadana
// constants
let inputDir = {x : 0 , y : 0};
const foodsound = new Audio ('Css/MUSIC, SOUNDS/food.mp3');
const gameOverSound = new Audio ('Css/MUSIC, SOUNDS/gameover.mp3');
const moveSound = new Audio ('Css/MUSIC, SOUNDS/move.mp3');
const musicSound = new Audio ('Css/MUSIC, SOUNDS/game on.mp3');


function main(currentTime){
    
}
window.addEventListener('keydown', e => {
    moveSound.play();
    musicSound.play();
    console.log(e);
    switch(e.key) {
        case "ArrowUp" :
            console.log("ArrowUp");
            break;

        case "ArrowDown" :
            console.log("ArrowDown");
            break;

        case "ArrowLeft" :
            console.log("ArrowLeft");
            break;

        case "ArrowRight" :
            console.log("ArrowRight");
            break;
        default :
        break;
    }
    
})
