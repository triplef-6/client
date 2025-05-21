import {AppRoutes} from "@/app/routing";
import {StrictMode} from "react";
import {useOnboardingRedirect} from "@/app/routing/useOnboardingRedirect.ts";
import {useAddManyFavFactory} from "@/features";

export const App = () => {

    useOnboardingRedirect()
    useAddManyFavFactory()

    return (
        <StrictMode>
            <AppRoutes/>
        </StrictMode>
    )
};