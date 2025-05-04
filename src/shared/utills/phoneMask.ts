export const phoneMask = (value: string): string => {

    const filtered = value.replace(/[^\d]/g, "")

    if (filtered.length <= 1) return `+7 (${filtered}`
    if (filtered.length <= 4) return `+7 (${filtered.slice(1)}`
    if (filtered.length <= 7) return `+7 (${filtered.slice(1, 4)}) ${filtered.slice(4)}`
    if (filtered.length <= 9) return `+7 (${filtered.slice(1, 4)}) ${filtered.slice(4, 7)}-${filtered.slice(7)}`

    return `+7 (${filtered.slice(1, 4)}) ${filtered.slice(4, 7)}-${filtered.slice(7, 9)}-${filtered.slice(9, 11)}`

}