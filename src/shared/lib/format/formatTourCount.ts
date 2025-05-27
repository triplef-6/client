export const formatTourCount = (count: number): string => {

    const lastDigit = count % 10
    const lastTwoDigits = count % 100

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return `${count} найденных экскурсий`

    switch (lastDigit) {
        case 1:
            return `${count} найденная экскурсия`
        case 2:
        case 3:
        case 4:
            return `${count} найденные экскурсии`
        default:
            return `${count} найденных экскурсий`
    }

}