export interface ISlot {
    id: number
    tourId: number
    date: Date | undefined
    time: string
    groupCapacity: number
    freeSeats: number
}