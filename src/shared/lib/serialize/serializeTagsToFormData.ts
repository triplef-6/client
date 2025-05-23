export const serializeTagsToFormData = (tags: string[]): FormData => {

    const formData = new FormData()
    const blob = new Blob([JSON.stringify(tags)], { type: "application/json" })
    formData.append("tags", blob)

    return formData

}