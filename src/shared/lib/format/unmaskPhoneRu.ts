export const unmaskPhoneRu = (value: string): string => {

    const digits = value.replace(/\D/g, "")

    if (!digits.startsWith("7") && !digits.startsWith("8")) return `7${digits}`
    if (digits.startsWith("8")) return `7${digits.slice(1)}`
    return digits

}