export const formatPeople = (count: number): string => {

    const lastDigit = count % 10
    const lastTwoDigits = count % 100

    switch (true) {
        case lastTwoDigits >= 11 && lastTwoDigits <= 14:
            return `${count} человек`
        case lastDigit === 1:
            return `${count} человек`
        case lastDigit >= 2 && lastDigit <= 4:
            return `${count} человека`
        default:
            return `${count} человек`
    }

}
