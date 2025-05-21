import {FC} from "react";
import {SearchInput, Switch} from "@/shared/ui";
import style from "./style.module.css"

type IndexProps = {
    setCity: (value: string) => void
    setByCity: (value: boolean) => void
}

export const Index: FC<IndexProps> = ({setCity, setByCity}) => {
    return (
        <div className={style.container}>
            <SearchInput
                className={"max-md:w-full"}
                onChangeHandler={setCity}
                placeholder={"Искать по городу"}
            />
            <div className={"flex justify-end"}>
                <div className={"flex flex-row gap-2 text-grayscale-600"}>
                    <Switch defaultValueBol={false} onChangeValue={setByCity}/>
                    <span>Поиск в городе</span>
                </div>
            </div>
        </div>
    );
};