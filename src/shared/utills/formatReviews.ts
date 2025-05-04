export const formatReviews = (ratingCount: number): string => {

    const lastDigit = ratingCount % 10
    const lastTwoDigits = ratingCount % 100

    switch (true) {
        case lastTwoDigits >= 11 && lastTwoDigits <= 14:
            return `${ratingCount} отзывов путешественников`
        case lastDigit === 1:
            return `${ratingCount} отзыв путешественников`
        case lastDigit >= 2 && lastDigit <= 4:
            return `${ratingCount} отзыва путешественников`
        default:
            return `${ratingCount} отзывов путешественников`
    }

}