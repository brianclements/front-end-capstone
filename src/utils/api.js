import { today, dateAsNum } from '../utils/dateHelpers.js';

const seededRandom = function(seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    // Changed from default to expect date as string, not Date object,
    // and specifically, the actual date the user selects in the form. This has
    // added benefit of actually giving different results based on the day the
    // user selects
    let result = [];
    let dateNum = dateAsNum(date);
    let random = seededRandom(dateNum);

    // I want times reported for today to be from the current hour forward, 
    // but past 10am, times reported in the future to be from 10am - 11pm, and 
    // times in the past to not be available.
    let startHours;
    const openTime = 10;
    const closingTime = 23;
    const todayDate = new Date();
    const nowHour = todayDate.getHours();
    
    const makeTimes = () => {
        for(let i = startHours; i < closingTime; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
    };

    if (date == today()) {
        startHours = Math.max(openTime, nowHour);
        makeTimes();
    } else if (dateAsNum(date) > dateAsNum(today())) {
        startHours = openTime;
        makeTimes();
    } else {
        result.push('No Times Available');
    };
    return result;
};

const submitAPI = function(formData) {
    return true;
};

export { fetchAPI, submitAPI };
