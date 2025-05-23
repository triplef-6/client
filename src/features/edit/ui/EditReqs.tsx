import {FC} from "react";
import {Tag} from "@/entities";
import {useUserData} from "@/features/edit/hooks";
import {AppSkeleton} from "@/shared/ui";

export const EditReqs: FC = () => {

    const {
        tags,
        userTags,
        isLoading, isError, isPlaceholderData,
        addTag, removeTag
    } = useUserData()

    if (isLoading || isPlaceholderData) return <AppSkeleton/>
    if (isError) return null

    return (
        <div className={"flex flex-col gap-4 p-6 rounded-2xl bg-grayscale-0 max-lg:order-last"}>
            <span className={"text-lg font-semibold text-grayscale-500"}>
                Любимые темы экскурсии:
            </span>
            <p className={"text-base text-grayscale-400"}>
                Набор ваших предпочтений,
                которые мы сформировали на основе поисковых запросов и посещенных экскурсий.
                Всегда можно указать другие!
            </p>
            <div className={"flex flex-row gap-3 flex-wrap"}>
                {tags.map((tag, i) => (
                    <Tag
                        key={i}
                        value={userTags}
                        tag={tag}
                        add={addTag}
                        remove={removeTag}
                        variant={"outline"}
                    />
                ))}
            </div>
        </div>
    );
};