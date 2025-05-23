export const formatPhone = (phone: string): string => {
    const phoneStr = phone.toString()
    return `+${phoneStr[0]}-${phoneStr.slice(1, 4)}-${phoneStr.slice(4, 7)}-${phoneStr.slice(7, 9)}-${phoneStr.slice(9)}`
}