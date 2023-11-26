function convertDate(date) {
    const dateObj = new Date(String(date));

    const year = dateObj.getFullYear();
    const month = (`0${dateObj.getMonth() + 1}`).slice(-2); // Adding 1 because getMonth() returns zero-based month
    const day = (`0${dateObj.getDate()}`).slice(-2);

    return `${year}-${month}-${day}`;
}

function getTodayDate() {
    const today = new Date(); // Get today's date
    const year = today.getFullYear();
    const month = (`0${today.getMonth() + 1}`).slice(-2);
    const day = (`0${today.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
}

export {convertDate, getTodayDate}
