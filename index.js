var allButtons = document.querySelectorAll("button");
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');

function triggerSound(key) {
  switch (key) {
  case "w":
  crash.play();
  break;
  case "a":
  kickBass.play();
  break;
  case "s":
  snare.play();
  break;
  case "d":
  tom1.play();
  break;
  case "j":
  tom2.play();
  break;
  case "k":
  tom3.play();
  break;
  case "l":
  tom4.play();
  break;
  default:
  console.log(this.innerHTML);
  }
}

for (let i=0; i <= document.querySelectorAll(".drum").length; i++) {
allButtons[i].addEventListener("click", function() {
triggerSound(this.innerHTML);
buttonAnimaton(this.innerHTML);
});
document.addEventListener("keydown", function(event) {
triggerSound(event.key);
buttonAnimaton(event.key);
});
}

function buttonAnimaton(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
