import {ITour, TourAccessibility} from "@/shared/types";
import {useState} from "react";
import {useMe} from "@/features";
import {useCreateReview} from "@/entities";

/**
 * В personCount передается 0, поскольку после добавления фичи для бронирования тура через выбор слота, размер группы перенесся в слот.
 * Поэтому теперь в форму для оставления отзыва нужно передать не тур, а сделку (IOrder), которая содержит и id тура и сам слот.
 *
 * Пока я оставляю текущую реализация, так как на сервере нет отдельного эндпойнта для выдачи сделок по id пользователя.
 * */

type Result = {
    isPaused: boolean
    isPending: boolean
    isSuccess: boolean
    completed: boolean
    positive: string
    negative: string
    rating: number
    updateRating: (value: number) => void
    updateNegative: (value: string) => void
    updatePositive: (value: string) => void
    save: () => void
}

export const useCreateReviewForm = (tour: ITour): Result => {

    const {me} = useMe()

    const {
        mutate: create,
        isPaused,
        isPending,
        isSuccess
    } = useCreateReview()

    const [positive, setPositive] = useState<string>("")
    const [negative, setNegative] = useState<string>("")
    const [rating, setRating] = useState<number>(0)

    const save = () => create({
        id: Date.now(),
        tourId: tour.id,
        name: me.name,
        rating: rating,
        negativeText: negative,
        positiveText: positive,
        withChildren: tour.accessibility === TourAccessibility.WITH_CHILDREN,
        personCount: 0
    })

    return {
        completed: Boolean(positive) && Boolean(negative) && rating > 0,
        positive, negative, rating, isPaused, isPending, isSuccess,
        updateRating: setRating,
        updateNegative: setNegative,
        updatePositive: setPositive,
        save
    }

}