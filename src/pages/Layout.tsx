import {Outlet} from "react-router-dom"
import {FC} from "react";
import {Footer, Header} from "@/widgets";
import s from "@/app/styles/pages.module.css"
import {Breadcrumbs} from "@/features";
import {useScrollToTop} from "@/shared/hooks";

export const Layout: FC = () => {

    useScrollToTop()

    return (
        <div className={s.layout}>
            <Header/>
            <main className={s.main}>
                <Breadcrumbs/>
                <div className={s.outlet}>
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};