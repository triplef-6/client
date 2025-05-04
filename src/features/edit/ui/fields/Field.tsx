import {FC} from "react";
import {ProfileInput} from "@/shared/ui";

type FieldProps = {
    defaultValue: string
    onChangeHandler: (value: string) => void
    title: string
    placeholder: string
}

export const Field: FC<FieldProps> = ({title, placeholder, defaultValue, onChangeHandler}) => {
    return (
        <div className={"flex flex-col gap-2"}>
            <span className={"text-base text-grayscale-500"}>
                {title}
            </span>
            <ProfileInput
                defaultValue={defaultValue}
                onChangeHandler={onChangeHandler}
                placeholder={placeholder}
            />
        </div>
    );
};