export const serializeTagsToFormData = (tags: string[]): FormData => {
    const formData = new FormData()
    formData.append("tags", tags.join(","))
    return formData
}