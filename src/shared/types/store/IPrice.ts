export interface IPrice {
    get price(): number
    set price(value: number)

    get priceForPerson(): number
    set priceForPerson(value: number)
}