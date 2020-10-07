/*--adding sample event listener, which displays an alert each time a button is clicked-----*/
var numberofDrums=document.querySelectorAll(".drum").length;

//event when image was clicked
for(var i=0;i<numberofDrums;i++)
  {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var buttonInnerHtml=this.innerHTML;
     makeSound(buttonInnerHtml) //make sound

     buttonAnimation(buttonInnerHtml) //animate the button
    });
  }


//event when keyboard keypress occured
  document.addEventListener("keydown", function(event){
    makeSound(event.key)  //make sound
    buttonAnimation(event.key)  //animate the button

  })

//switch case to play the appropriate sound
  function makeSound(key){
    switch(key)
     {
      case "w":
        var audio = new Audio('sounds/crash.mp3');
		audio.play();
		break;

      case "a":
        var audio = new Audio('sounds/kick-bass.mp3');
		audio.play();
		break;

      case "s":
        var audio = new Audio('sounds/snare.mp3');
		audio.play();
		break;

      case "d":
        var audio = new Audio('sounds/tom-1.mp3');
		audio.play();
		break;

      case "j":
        var audio = new Audio('sounds/tom-2.mp3');
		audio.play();
		break;

      case "k":
        var audio = new Audio('sounds/tom-3.mp3');
		audio.play();
		break;

      case "l":
        var audio = new Audio('sounds/tom-4.mp3');
		audio.play();
		break;  

    default: console.log();   
     }
  }

  //function to initiate button animation
  function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey)
    activeButton.classList.add("pressed")   //add the class pressed 
    setTimeout(function(){
      activeButton.classList.remove("pressed")  //add a time out to remove the class, this function gets called after the set time out->asynchronous programming in JS
    },100)
  }