// Create function:
// getDaysBetween(date1, date2)
// Return number of days between two dates

function getDaysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; 
    const diffInTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.round(diffInTime / oneDay);
}
console.log(getDaysBetween(new Date('2026-01-01'), new Date('2026-04-24')));
