function convertDate(date: string): string {
    const dateObj = new Date(String(date));

    const year: number = dateObj.getFullYear();
    const month: string = (`0${dateObj.getMonth() + 1}`).slice(-2);
    const day: string = (`0${dateObj.getDate()}`).slice(-2);

    return `${year}-${month}-${day}`;
}

function getTodayDate(): string {
    const today: Date = new Date();
    const year: number = today.getFullYear();
    const month: string = (`0${today.getMonth() + 1}`).slice(-2);
    const day: string = (`0${today.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
}

export {convertDate, getTodayDate};
