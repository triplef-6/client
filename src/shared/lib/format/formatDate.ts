export const formatDate = (value: Date) => {
    return new Date(value).toLocaleDateString("ru-RU", { day: "numeric", month: "long"})
}