import {Outlet} from "react-router-dom"
import {FC} from "react";
import {Footer, Header} from "@/widgets";
import style from "@/app/styles/pages.module.css"
import {Breadcrumbs} from "@/features";
import {useScrollToTop} from "@/shared/hooks";

export const Layout: FC = () => {

    useScrollToTop()

    return (
        <div className={style.layout}>
            <Header/>
            <main className={style.main}>
                <Breadcrumbs/>
                <div className={"py-8 w-full"}>
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};