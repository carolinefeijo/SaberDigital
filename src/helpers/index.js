import moment from "moment";
import 'moment/locale/pt-br';
moment.locale('pt-br');

export const getCurrentWeekDays = () => {

    const weekStart = moment().startOf('week');

    const days = [];

    for (let i = 1; i <= 5; i++) { 
        days.push({ 
            date: moment(weekStart).add(i, 'days').utc().format(),
            day: moment(weekStart).add(i, 'days').format('DD'),
            label: moment(weekStart).add(i, 'days').format('ddd')
        });
    }
    return days;
}

export const formatHour = (hour) => { 
    return moment(hour).format('HH:mm')
}


export const formatHoursLastUpdate = (hour) => {
    return moment(hour).startOf('hour').fromNow()
}

//.slice(0, 3)