export const validateImage = (image: File): boolean => {

    const MAX_SIZE_MB: number = 20
    const ALLOWED_TYPES: string[] = ["image/png", "image/jpeg", "image/webp"]

    if (!ALLOWED_TYPES.includes(image.type)) return false
    else return image.size <= MAX_SIZE_MB * 1024 * 1024;

}