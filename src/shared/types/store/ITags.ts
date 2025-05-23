export interface ITags {
    get tags(): string[]
    add(value: string): void
    remove(value: string): void
    clear(): void
}