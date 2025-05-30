import {BaseStore} from "@/shared/lib";
import {ITour, TourAccessibility, TourFormat, TourFormatBehavior} from "@/shared/types";

import {ContactsStore} from "./ContactsStore.ts";
import {DescriptionStore} from "./DescriptionStore.ts";
import {PriceStore} from "./PriceStore.ts";
import {CoordinatesStore} from "./CoordinatesStore.ts";
import {TagsStore} from "./TagsStore.ts";
import {ImagesStore} from "./ImagesStore.ts";
import {LocationStore} from "./LocationStore.ts";
import {TimeStore} from "./TimeStore.ts";
import {ParamsStore} from "./ParamsStore.ts";
import {SelectOptionsStore} from "./SelectOptionsStore.ts";

class CreateTourStore extends BaseStore {

    private _isEdit: boolean = false
    private _id: number = 0

    contacts = new ContactsStore()
    description = new DescriptionStore()
    price = new PriceStore()
    coordinates = new CoordinatesStore()
    tags = new TagsStore()
    images = new ImagesStore()
    location = new LocationStore()
    time = new TimeStore()
    params = new ParamsStore()
    selectOptions = new SelectOptionsStore()

    constructor() {
        super();
    }

    init() {

        this.isSubmitted = false

        this.contacts = new ContactsStore()
        this.description = new DescriptionStore()
        this.price = new PriceStore()
        this.coordinates = new CoordinatesStore()
        this.tags = new TagsStore()
        this.images = new ImagesStore()
        this.location = new LocationStore()
        this.time = new TimeStore()
        this.params = new ParamsStore()
        this.selectOptions = new SelectOptionsStore()

    }

    set tour(value: ITour) {
        this._id = value.id
        this.contacts = new ContactsStore(value.contacts)
        this.description = new DescriptionStore(value.description)
        this.price = new PriceStore(value.format, value.price, value.priceForPerson, value.groupCapacity)
        this.coordinates = new CoordinatesStore(value.coordinates)
        this.tags = new TagsStore(value.tags)
        this.images = new ImagesStore(value.images)
        this.location = new LocationStore(value.location, value.routeLength, value.byCity)
        this.time = new TimeStore(value.date, value.duration, value.time)
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
            location: this.location.location,
            routeLength: this.location.routeLength,
            byCity: this.location.byCity,
            price: this.price.price,
            priceForPerson: this.price.priceForPerson,
            groupCapacity: this.price.groupCapacity,
            formatBehavior: this.selectOptions.formatBehavior as TourFormatBehavior,
            format: this.price.format as TourFormat,
            accessibility: this.selectOptions.accessibility as TourAccessibility,
            contacts: this.contacts,
            date: this.time.date,
            time: this.time.time,
            duration: this.time.duration,
            contributorId: this.params.contributorId,
            rating: 0,
            ratingCount: 0,
            freeSeats: 0
        }
    }

    private get allStores() {
        return [
            this.params, this.description, this.time, this.images,
            this.tags, this.price, this.location, this.coordinates,
            this.selectOptions, this.contacts
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