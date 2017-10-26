import moment from 'moment';

export function generateRecentDates() {
    const dates = [];
    let date = moment().subtract(12, 'days');

    for (let i = 0; i < 13; ++i) {
        dates.push(date);
        date = date.clone().add(1, 'days');
    }

    return dates;
}