export const formatRatingCount = (ratingCount: number): string => {

    const lastDigit = ratingCount % 10
    const lastTwoDigits = ratingCount % 100

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return `${ratingCount} оценок`

    switch (lastDigit) {
        case 1:
            return `${ratingCount} оценка`
        case 2:
        case 3:
        case 4:
            return `${ratingCount} оценки`
        default:
            return `${ratingCount} оценок`
    }

}