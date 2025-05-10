import {ITour} from "@/shared/types";

export const serializeTourToFormData = (tour: ITour): FormData => {

    const formData = new FormData()

    formData.append("id", tour.id.toString())
    formData.append("title", tour.title)
    formData.append("price", (tour.price ?? 0).toString())
    formData.append("priceForPerson", tour.priceForPerson.toString())
    formData.append("groupCapacity", tour.groupCapacity.toString())
    formData.append("formatBehavior", tour.formatBehavior)
    formData.append("format", tour.format)
    formData.append("accessibility", tour.accessibility)
    formData.append("byCity", tour.byCity.toString())
    formData.append("date", tour.date?.toISOString().split("T")[0] as string)
    formData.append("time", tour.time)
    formData.append("duration", tour.duration.toString())
    formData.append("contributorId", tour.contributorId.toString())
    formData.append("rating", tour.rating.toString())
    formData.append("ratingCount", tour.ratingCount.toString())
    formData.append("routeLength", tour.routeLength.toString())

    // tags
    formData.append("tags", tour.tags.join(","))

    // description
    formData.append("description.info", tour.description.info)
    formData.append("description.whatToExpect", tour.description.whatToExpect)
    formData.append("description.places", tour.description.places.join(","))
    formData.append("description.topics", tour.description.topics.join(","))
    formData.append("description.orgDetails", tour.description.orgDetails)
    formData.append("description.meetingPlace", tour.description.meetingPlace)

    // contacts
    formData.append("contacts.vk", tour.contacts.vk || "")
    formData.append("contacts.telegram", tour.contacts.telegram || "")
    formData.append("contacts.phone", tour.contacts.phone)

    // coordinates
    formData.append("coordinates.point.latitude", tour.coordinates.point.latitude.toString())
    formData.append("coordinates.point.longitude", tour.coordinates.point.longitude.toString())
    formData.append("coordinates.zoom", tour.coordinates.zoom.toString())

    // locations
    formData.append("location.city", tour.location.city)
    formData.append("location.region", tour.location.region)
    formData.append("location.country", tour.location.country)
    formData.append("location.image", tour.location.image || "")
    formData.append("location.id", tour.location.id.toString())
    formData.append("location.tourCount", tour.location.tourCount.toString())

    // images
    tour.images
        .filter((image): image is File => image instanceof File)
        .forEach((image) => formData.append("images", image))

    return formData

}