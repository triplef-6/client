import {FC} from "react";
import {Dashboard, ProfileSidebar} from "@/widgets";
import s from '@/app/styles/pages.module.css'

export const ProfilePage: FC = () => {
    return (
        <div className={s.profile}>
            <h1 className={s.profileHeading}>Ваши данные</h1>
            <main className={s.profileMain}>
                <ProfileSidebar/>
                <Dashboard/>
            </main>
        </div>
    );
};