// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?
function timer(){
    let time=0;
    var mainTimer=setInterval(incrementer,1000);
    function incrementer(){
        time=time+1;
        //console.log("tick");
        document.getElementsByTagName("body")[0].innerHTML = `tick ${time}`;
        if (time==60){
            clearInterval(mainTimer);
        }
       
    }
    
}
timer();

//console.log(timer());

//window.onload = timer();

