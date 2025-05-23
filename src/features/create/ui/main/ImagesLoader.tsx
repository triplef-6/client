import { FC } from "react";
import {observer} from "mobx-react-lite";
import {cn} from "@/app/lib";
import style from "./style.module.css";
import { ImageLoader } from "@/shared/ui";
import {useImagesLoader, useSubmitted} from "@/shared/hooks";
import {createTourStore as store} from "@/features/create/model";

export const ImagesLoader: FC = observer(() => {

    const {isSubmitted} = useSubmitted(store)
    const {value, update, isError, count} = useImagesLoader(store.images, isSubmitted)

    return (
        <div className={cn(
            "flex flex-col gap-4 rounded-2xl bg-grayscale-0 py-6",
            isError && "border border-secondary-red"
        )}>
            <div className={style.imagesDetails}>
                <span className={cn(
                    "text-lg font-semibold",
                    isError ? "text-secondary-red" : "text-grayscale-500"
                )}>
                    Загруженно {count} из 5
                </span>
                <p>
                    Путешественники выбирают предложения по фотографиям.
                    Чем привлекательнее фото, тем выше вероятность заказа.
                    Уделите фотографиям максимум внимания.
                </p>
                <p>Общие требования к галерее:</p>
                <ul className={style.list}>
                    <li>Первое изображение служит главным</li>
                    <li>5 фото, до 20 МБ каждое</li>
                    <li>1350 пикселей по меньшей стороне в формате jpg, webp или png</li>
                    <li>изображены ключевые моменты маршрута и программы</li>
                    <li>транспорт внутри и снаружи, если проходит на транспорте</li>
                </ul>
            </div>
            <div className={"flex flex-col xl:flex-row items-center gap-2 justify-center"}>
                <ImageLoader
                    index={0}
                    key={0}
                    size={"lg"}
                    file={value[0]}
                    update={(index = 0, file) => update(index, file)}
                />
                <div className={"grid grid-cols-2 xl:h-full gap-2"}>
                    {value.slice(1, 5).map((image, index) => (
                        <ImageLoader
                            index={index}
                            key={index + 1}
                            size={"sm"}
                            file={image}
                            update={(index, file) => update(index + 1, file)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
})