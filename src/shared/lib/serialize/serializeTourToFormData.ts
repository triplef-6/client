import {ITour} from "@/shared/types";

export const serializeTourToFormData = (tour: ITour): FormData => {

    const formData = new FormData()

    const tourData = {
        title: tour.title,
        price: tour.price ?? 0,
        priceForPerson: tour.priceForPerson,
        groupCapacity: tour.groupCapacity,
        formatBehavior: tour.formatBehavior,
        format: tour.format,
        accessibility: tour.accessibility,
        byCity: tour.byCity,
        date: tour.date instanceof Date ? tour.date.toISOString().split("T")[0] : "",
        time: tour.time,
        duration: tour.duration,
        contributorId: tour.contributorId,
        rating: tour.rating,
        ratingCount: tour.ratingCount,
        routeLength: tour.routeLength,
        tags: tour.tags,
        description: {
            info: tour.description.info,
            whatToExpect: tour.description.whatToExpect,
            places: tour.description.places,
            topics: tour.description.topics,
            orgDetails: tour.description.orgDetails,
            meetingPlace: tour.description.meetingPlace
        },
        contacts: {
            vk: tour.contacts.vk || "",
            telegram: tour.contacts.telegram || "",
            phone: tour.contacts.phone
        },
        coordinates: {
            point: {
                latitude: tour.coordinates.point.latitude,
                longitude: tour.coordinates.point.longitude
            },
            zoom: tour.coordinates.zoom
        },
        location: {
            city: tour.location.city,
            region: tour.location.region,
            country: tour.location.country,
            image: tour.location.image || "",
            id: tour.location.id,
            tourCount: tour.location.tourCount
        }
    }

    formData.append(
        "tour",
        new Blob([JSON.stringify(tourData)], { type: "application/json" })
    )

    tour.images
        .filter((image): image is File => image instanceof File)
        .forEach((image) => formData.append("images", image))

    return formData

}