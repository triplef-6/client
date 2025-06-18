import {BaseStore} from "@/shared/lib";
import {ISlot, ITour, TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types";

import {DescriptionStore} from "./DescriptionStore.ts";
import {PriceStore} from "./PriceStore.ts";
import {CoordinatesStore} from "./CoordinatesStore.ts";
import {TagsStore} from "./TagsStore.ts";
import {ImagesStore} from "./ImagesStore.ts";
import {LocationTimeStore} from "./LocationTimeStore.ts";
import {ParamsStore} from "./ParamsStore.ts";
import {SelectOptionsStore} from "./SelectOptionsStore.ts";
import {SlotStore} from "@/features/create/model/SlotStore.ts";

class CreateTourStore extends BaseStore {

    private _isEdit: boolean = false
    private _id: number = Date.now()

    description = new DescriptionStore()
    price = new PriceStore()
    coordinates = new CoordinatesStore()
    tags = new TagsStore()
    images = new ImagesStore()
    locationTime = new LocationTimeStore()
    params = new ParamsStore()
    selectOptions = new SelectOptionsStore()
    slots = new SlotStore()

    constructor() {
        super();
    }

    get tourId(): number {
        return this._id
    }

    init() {

        this.isSubmitted = false

        this.description = new DescriptionStore()
        this.price = new PriceStore()
        this.coordinates = new CoordinatesStore()
        this.tags = new TagsStore()
        this.images = new ImagesStore()
        this.locationTime = new LocationTimeStore()
        this.params = new ParamsStore()
        this.selectOptions = new SelectOptionsStore()
        this.slots = new SlotStore()

    }

    set slot(value: ISlot[]) {
        this.slots = new SlotStore(value)
    }

    get slot(): ISlot[] {
        return this.slots.slots
    }

    set tour(value: ITour) {
        this._id = value.id
        this.description = new DescriptionStore(value.description)
        this.price = new PriceStore(value.format, value.price, value.priceForPerson)
        this.coordinates = new CoordinatesStore(value.coordinates)
        this.tags = new TagsStore(value.tags)
        this.images = new ImagesStore(value.images)
        this.locationTime = new LocationTimeStore(value.location, value.routeLength, value.byCity)
        this.params = new ParamsStore(value.title, value.contributorId)
        this.selectOptions = new SelectOptionsStore(value.accessibility, value.formatBehavior)
    }

    get tour(): ITour {
        return {
            id: this._id,
            title: this.params.title,
            description: this.description,
            images: this.images.images,
            coordinates: this.coordinates.coordinates,
            tags: this.tags.tags,
            location: this.locationTime.location,
            routeLength: this.locationTime.routeLength,
            byCity: this.locationTime.byCity,
            price: this.price.price,
            priceForPerson: this.price.priceForPerson,
            formatBehavior: this.selectOptions.formatBehavior as TourFormatBehavior,
            format: this.price.format as TourFormat,
            accessibility: this.selectOptions.accessibility as TourAccessibility,
            duration: this.locationTime.duration,
            contributorId: this.params.contributorId,
            rating: 0,
            ratingCount: 0,
        }
    }

    private get allStores() {
        return [
            this.params, this.description, this.images,
            this.tags, this.price, this.locationTime, this.coordinates,
            this.selectOptions, this.slots
        ]
    }

    get isDisabled(): boolean {
        return this.allStores.some(store => store.isDisabled)
    }

    get isEdit(): boolean {
        return this._isEdit;
    }

    set isEdit(value: boolean) {
        this._isEdit = value;
    }

}

export const createTourStore = new CreateTourStore()