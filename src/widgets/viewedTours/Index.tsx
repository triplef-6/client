import {FC, useState} from "react";
import style from "./style.module.css";
import {Header} from "./header/index.ts";
import {Accordion} from "./accordion/index.ts"
import {Viewed} from "./viewed/index.ts";
import {useAuthContext} from "@/features";

export const Index: FC = () => {

    const {isAuth} = useAuthContext()

    const [city, setCity] = useState<string>("")
    const [byCity, setByCity] = useState<boolean>(false)
    
    return (
        <div className={style.container}>
            <Header
                setCity={setCity}
                setByCity={setByCity}
            />
            {isAuth && <Accordion/>}
            <Viewed
                city={city}
                byCity={byCity}
            />
        </div>
    );
};