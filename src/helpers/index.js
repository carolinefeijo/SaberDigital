import moment from "moment";
moment.locale('pt-br')

export const getCurrentWeekDays = () => {
    const weekStart = moment().startOf('week');

    const days = [];
    
    for (let i = 1; i <= 5; i++) {
        days.push( {
            date : moment(weekStart).add(i, 'days').utc().format(),
            day: moment(weekStart).add(i, 'days').format('DD'),
            label: moment(weekStart).add(i, 'days').format('dddd').slice(0, 3)
        });
      
    }

    return days;
}