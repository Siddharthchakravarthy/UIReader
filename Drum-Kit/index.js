var g = document.querySelectorAll(".drum");
for(var i = 0 ; i < g.length; i++){
    g[i].addEventListener("click", handleclick);
}
function handleclick(){
    var Button_pressed = this.innerHTML;
    // for mouse nalli aa key na press maad,daaga ee call aagatte
    makesound(Button_pressed);
    animation(Button_pressed);
}
document.addEventListener("keydown" , keyp);
function keyp(event){
    makesound(event.key);
    animation(event.key);
    //idu keyboard press ge use maadoodu naavu
}
function makesound(keya){
    switch (keya) {
        case "w" :
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a" :
            var tom2 = new Audio ('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s" :
            var tom3 = new Audio ('sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case "d" :
            var tom4 = new Audio ('sounds/tom-4.mp3');
            tom4.play();
            break;
        
        case "j" :
            var kick = new Audio ('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "k" :
            var snare = new Audio ('sounds/snare.mp3');
            snare.play();
            break;

        case "l" :
            var crash = new Audio ('sounds/crash.mp3');
            crash.play();
            break;
        
        default :
            break;
    }
}
function animation(pressedbutton){
    var o = document.querySelector("." + pressedbutton);
    o.classList.add("pressed");
    setInterval( () =>  {
        o.classList.remove("pressed");
    }, 100);
}