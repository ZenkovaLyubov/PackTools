import {DateTime} from './luxon.js'

function getDateDiff(dateFrom,dateTo){

    const dateFromObj = DateTime.fromISO(dateFrom);
    const dateToObj = DateTime.fromISO(dateTo);

    return dateFromObj.diff(dateToObj, ['years','months', 'days']).toObject();

}
export default getDateDiff;
