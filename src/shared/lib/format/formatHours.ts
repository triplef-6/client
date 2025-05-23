export const formatHours = (duration: number): string => {

    const lastDigit = duration % 10
    const lastTwoDigits = duration % 100

    switch (true) {
        case lastTwoDigits >= 11 && lastTwoDigits <= 14:
            return `${duration} часов`
        case lastDigit === 1:
            return `${duration} час`
        case lastDigit >= 2 && lastDigit <= 4:
            return `${duration} часа`
        default:
            return `${duration} часов`
    }

}