import {Outlet, useLocation, useNavigate} from "react-router-dom"
import {FC, useEffect} from "react";
import {Footer, Header} from "@/widgets";
import style from "@/app/styles/pages.module.css"
import {RouteNames} from "@/shared/types";
import {Breadcrumbs} from "@/features";

export const Layout: FC = () => {

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0 })
        if (location.pathname === "/") navigate(RouteNames.MAIN)
    }, [location.pathname, navigate]);

    return (
        <div className={style.layout}>
            <Header/>
            <main className={style.main}>
                <Breadcrumbs/>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};