function validDate(startDate, endDate) {
    return getDate(endDate) > getDate(startDate);
}

function getDate(dateString) {
    return new Date(dateString).getTime();
}