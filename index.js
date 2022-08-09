var userClickedPattren=[];
var gamePattren=[];
var buttonColors=["red","blue","green","yellow"];
var level=0;
var started = false;

$(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  


function nextSequence(){

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber=Math.floor(Math.random()*4);
    var randomChoosenColor=buttonColors[randomNumber];
    gamePattren.push(randomChoosenColor);

    $("#"+randomChoosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor);
    console.log(gamePattren);
    
    
    
}

$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattren.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    // console.log(userClickedPattren);
    checking(userClickedPattren.length-1);
    
    
});


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.muted=false;
    audio.play();
    return;
}

function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed")
    setTimeout(function(){
    $("#"+currentColor).removeClass("pressed"),1000})
    return;
    

}

function checking(currentLevel){
    if (gamePattren[currentLevel] === userClickedPattren[currentLevel]) {

        console.log("success");
  
        if (userClickedPattren.length === gamePattren.length){
  
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
        
        $("body").addClass("game-over");
        playSound("wrong");
        setTimeout(function (){
            $("body").removeClass("game-over");
        } ,200)
        $("#level-title").text("Game Over, Press Any Key to Restart");
        console.log("wrong");
        startover();
       
  
      }
  
  }

function startover()
{
  level = 0;
  gamePattern = [];
  started = false;
  console.log("hey")
  // exit();

}







