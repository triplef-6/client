export const getWeekDay = (value: Date | string): string => {
    const date = new Date(value)
    return date.toLocaleDateString("ru-RU", { weekday: "long" })
}