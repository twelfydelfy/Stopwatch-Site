let seconds = 0;
let miliseconds = 0;
let themiliid;
let isRunning = false;
function startClick(){
  themiliid = setInterval(function tickingMiliseconds(){
    miliseconds++;
    if(miliseconds >= 100){miliseconds = 0;
    seconds++;}
    document.querySelector('.timer').innerHTML = seconds + '.' + miliseconds;
  }, 10);
  isRunning = true;

}

function stopClick(){
  if(isRunning === true){

    clearInterval(themiliid);
    isRunning = false;
    
  }
}
function resetClick(){
  stopClick();
  seconds=0; miliseconds=0;
  document.querySelector('.timer').innerHTML = seconds +'.'+ miliseconds;
}