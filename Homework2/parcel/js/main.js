import { printError, printResult } from './jointLib/printResult.js';
import getDateDiff from './getDateDiff.js';
import timerMinus from './timerMinus.js';
import setTimeObj from './setTimeObj.js';
import { FormToggle} from './formToggle/formToggle.js';
import {} from './howler.js';


let form = document.getElementById("datecalc");
let formTimer = document.getElementById("timercalc");

//переключение
const calcTab = document.querySelector('#viewCalc');
const timerTab = document.querySelector('#viewTimer');

calcTab.addEventListener('click',()=>FormToggle(formTimer, form));
timerTab.addEventListener('click',()=>FormToggle(form, formTimer));

//калькулятор дат
form.onsubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    const firstDate = formData.get('firstDate');
    const secondDate = formData.get('secondDate');

    if(!firstDate || !secondDate)
    {
        printError("Пожалуйста, укажите даты!");
    }
    else{
        const dateDiff = getDateDiff(firstDate, secondDate);
        printResult(dateDiff, "datecalc");
    }
}
//таймер
const start=document.getElementById("start");
const stop=document.getElementById("stop");
let timerId = null;

start.addEventListener('click', function(event) {

    event.preventDefault();
    const userHours = document.querySelector('#timer__hours').value;
    const userMinutes = document.querySelector('#timer__minutes').value;
    const userSeconds = document.querySelector('#timer__seconds').value;
    
    if(userHours>0 || userMinutes>0 || userSeconds>0)
    {
        start.setAttribute('disabled', 'true');
        calcTab.setAttribute('disabled', 'true');

        let dt = setTimeObj(userHours, userMinutes, userSeconds);
        printResult(dt, "timer");    
        timerId = setInterval(timerFunc,1000);
        function timerFunc(){

            printResult(dt, "timer");
            dt = timerMinus(dt, 1);
            printResult(dt, "timer");
            
            if(dt.toFormat("HH mm ss") == "00 00 00")
            {
                clearInterval(timerId);
                start.removeAttribute('disabled');
                calcTab.removeAttribute('disabled');
                printError("Время вышло!");
                
                const sound = new Howl({
                    src: ['gong.mp3']
                });
                   
                  sound.play();
            }
     
        }
        
    }
    else{
        clearInterval(timerId);
        printError('Укажите время для таймера');
    }

});

stop.addEventListener('click', function(event) {
        event.preventDefault();
    	clearInterval(timerId);
        printError("Таймер остановлен");
        start.removeAttribute('disabled');
        calcTab.removeAttribute('disabled');
})