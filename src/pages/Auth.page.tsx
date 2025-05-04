import {FC} from "react";
import s from "@/app/styles/pages.module.css"
import {AuthForm} from "@/features";

export const AuthPage: FC = () => {
    return (
        <div className={s.auth}>
            <AuthForm/>
        </div>
    );
};