export type WidgetContextType = {
    context: {
        city: string
        isActive: boolean
        cities: string[]
    }
    selectCity: (city: string) => void
    update: (city: string) => void
    focus: () => void
    blur: () => void
}