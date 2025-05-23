import {FC} from "react";
import {Button} from "@/shared/ui";

type TagProps = {
    value: string[]
    tag: string
    add: (value: string) =>  void
    remove: (value: string) => void
    variant: "outline" | "secondary"
}

export const Index: FC<TagProps> = ({value, tag, add, remove, variant = "secondary"}) => {

    const clickHandler = () => {
        const isSelected = value.includes(tag)
        if (!isSelected) add(tag)
        else remove(tag)
    }

    return (
        <Button
            onClick={clickHandler}
            className={value.includes(tag) ? "bg-primary-0 border-0" : ""}
            variant={variant}
            size={variant === "secondary" ? "md": "tag"}
        >
            {tag}
        </Button>
    );
}