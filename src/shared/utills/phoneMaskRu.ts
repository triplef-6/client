export const phoneMaskRu = (value: string): string => {

    let digits = value.replace(/\D/g, "")

    if (digits.startsWith("7")) digits = digits.slice(1)
    else if (digits.startsWith("8")) digits = digits.slice(1)

    if (digits.length === 0) return ""

    if (digits.length <= 3) return `+7 (${digits}`
    if (digits.length <= 6) return `+7 (${digits.slice(0, 3)}) ${digits.slice(3)}`
    if (digits.length <= 8) return `+7 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    return `+7 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8, 10)}`

}