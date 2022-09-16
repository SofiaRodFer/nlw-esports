export function convertHourStringToMinutes(hourString: string) {
    const [hours, minutes] = hourString.split(':').map(Number)

    const mintutesAmount = hours * 60 + minutes;

    return mintutesAmount;
}