
const start=document.getElementById("start");
const stop=document.getElementById("stop");

let timerId = null;
start.addEventListener('click', function(event) {
    
    event.preventDefault();
    const userHours = document.querySelector('#timer__hours').value;
    const userMinutes = document.querySelector('#timer__minutes').value;
    const userSeconds = document.querySelector('#timer__seconds').value;
    
    let userDate = new Date();
    userDate.setHours(userHours, userMinutes, userSeconds);
    console.log(userDate);

    const secDate = new Date();
    secDate.setHours(0, 0, 1);
    console.log(secDate);
        
    timerId = setInterval(countdownTimer, 1000);
   
    function countdownTimer()
     {
         let diff = (userDate - secDate);
        
         const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
         const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
         const seconds = diff > 0 ?  Math.floor(diff / 1000) % 60 : 0;
            
        userDate.setHours(hours, minutes, seconds);
     
        console.log(userDate);
    
    }
 
});

stop.addEventListener('click', function(event) {
        event.preventDefault();
    	clearInterval(timerId);
        console.log('stop');
})

    
