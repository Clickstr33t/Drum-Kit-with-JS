var buttons = document.querySelectorAll(".drum");



function soundActivate(key){
    switch (key){
        case "w": 
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a": 
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s": 
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d": 
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j": 
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "k": 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "l": 
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        default: console.log("Tasto non supportato!");
    } 
}

document.addEventListener('keydown', function (evento) {
    soundActivate(evento.key);
    buttonAnimation(evento.key);
  });





for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function (){
        soundActivate(this.innerHTML);
        buttonAnimation(this.innerHTML);
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    });

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}
