var w = new Audio('./sounds/tom-1.mp3');
var a = new Audio('./sounds/tom-2.mp3');
var s = new Audio('./sounds/tom-3.mp3');
var d = new Audio('./sounds/tom-4.mp3');
var j = new Audio('./sounds/snare.mp3');
var k = new Audio('./sounds/crash.mp3');
var l = new Audio('./sounds/kick-bass.mp3');



document.querySelectorAll(".drum").forEach(
    button => button.addEventListener("click", handleClick)
);

function handleClick(){
    currentKey = this.innerHTML;
    buttonAnimation(currentKey);
    makeSound(currentKey);
}

document.addEventListener("keydown",handleKeyPress(e));

function handleKeyPress(e){
    currentKey = e.key;
    buttonAnimation(currentKey);
    makeSound(currentKey);
}

function makeSound(currentKey){
    switch(currentKey){
        case "w":
            w.play();
            break;
        case "a":
            a.play();
            break;
        case "s":
            s.play();
            break;
        case "d":
            d.play();
            break;
        case "j":
            j.play();
            break;
        case "k":
            k.play();
            break;
        case "l":
            l.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    // console.log(activeButton.classList);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}