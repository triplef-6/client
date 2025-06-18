import {GuideDto} from "@/shared/types";

export const serializeGuideDtoToFormData = (dto: GuideDto) => {

    const formData = new FormData()

    const guideDtoData: GuideDto = {
        phone: dto.phone,
        info: dto.info,
        code: dto.code
    }

    formData.append(
        "guide",
        new Blob([JSON.stringify(guideDtoData)], { type: "application/json" })
    )

    return formData

}