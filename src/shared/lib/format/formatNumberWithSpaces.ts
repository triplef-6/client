export const formatNumberWithSpaces = (value: number) => {
    return new Intl.NumberFormat("ru-RU").format(value)
}