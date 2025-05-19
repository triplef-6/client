export const formatRatings = (value: number): string => {
    return value === 1 ? `На основе ${value} оценки` : `На основе ${value} оценок`
}