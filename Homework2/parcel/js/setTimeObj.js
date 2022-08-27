import {DateTime} from './luxon.js'

function setTimeObj(hours, minutes, seconds){
    return DateTime.fromObject({
        hour: hours, 
        minutes: minutes, 
        second: seconds,
    });
}
export default setTimeObj;