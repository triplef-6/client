export const formatDate = (value: Date, type: "str" | "num" = "str") => {
    const date = new Date(value)
    if (type === "str") return date.toLocaleDateString("ru-RU", { day: "numeric", month: "long" })
    return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}`
}