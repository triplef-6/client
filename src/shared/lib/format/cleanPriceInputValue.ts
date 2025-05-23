export const cleanPriceInputValue = (value: string) => {
    return parseFloat(value.replace(/[^\d.,]/g, "").replace(",", ".")) || 0
}