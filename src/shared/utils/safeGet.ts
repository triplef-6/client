export const safeGet = <T>(getter: () => T, fallback: T): T => {
    try {
        const result = getter()
        return result !== undefined && result !== null ? result : fallback
    } catch {
        return fallback
    }
}