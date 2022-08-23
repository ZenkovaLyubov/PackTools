const result = document.getElementById("result");

export const printError = (textErr) => {
    result.innerText = textErr;
}

export const printResult = (obj, key) => {
    if(key==="datecalc")
    {
        result.innerText = `Год: ${obj.years} Месяц: ${obj.months} День: ${obj.days}`; 
    }
    if(key==="timer"){

        result.innerText = obj.toFormat("HH : mm : ss");
    }
    
}