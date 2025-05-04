import {FC} from "react";

type TagsProps = {
    tags: string[]
}

export const Index: FC<TagsProps> = ({tags}) => {
    return (
        <div className={"flex flex-row flex-wrap gap-2 pb-4"}>
            {tags.map((tag, index) => (
                <div
                    key={index}
                    className={"py-1 px-4 rounded-2xl bg-grayscale-200 cursor-pointer hover:bg-primary-0 transition"}
                >
                    <p className={"text-sm text-grayscale-400"}>{tag}</p>
                </div>
            ))}
        </div>
    );
};