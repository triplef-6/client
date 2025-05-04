export const formatRouteLength = (length: number): string => {

    const roundedLength = Math.round(length * 10) / 10

    const lastDigit = roundedLength % 10
    const lastTwoDigits = roundedLength % 100

    switch (true) {
        case lastTwoDigits >= 11 && lastTwoDigits <= 14:
            return `${roundedLength} километров`
        case lastDigit === 1 && roundedLength !== 11:
            return `${roundedLength} километр`
        case lastDigit >= 2 && lastDigit <= 4 && !(roundedLength >= 12 && roundedLength <= 14):
            return `${roundedLength} километра`
        default:
            return `${roundedLength} километров`
    }

}