import {Route, Routes} from "react-router-dom";
import {RouteNames} from "@/shared/types";
import {RequireAuth} from "./RequireAuth.tsx";
import {
    AuthPage,
    BookingPage,
    ContributorPage, CreatePage, EditProfilePage, FavouritesPage,
    HomePage,
    Layout,
    LocationsPage,
    OnBoardingPage, Page404,
    ProfilePage, SettingsPage, SuccessPage,
    TourPage,
    ToursPage, WipPage
} from "@/pages";
import {FC} from "react";
import {AuthGuard} from "@/app/routing/AuthGuard.tsx";

export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route
                path={`/${RouteNames.ON_BOARDING}`}
                element={<OnBoardingPage/>}
            />
            <Route path={"/"} element={<Layout/>}>
                <Route path={RouteNames.MAIN} element={<HomePage/>}/>
                <Route
                    path={RouteNames.AUTH}
                    element={
                        <AuthGuard>
                            <AuthPage/>
                        </AuthGuard>
                    }
                />
                <Route path={RouteNames.LOCATIONS} element={<LocationsPage/>}/>
                <Route path={`${RouteNames.TOURS}/:location`} element={<ToursPage/>}/>
                <Route path={`${RouteNames.TOUR}/:id/:title`} element={<TourPage/>}/>
                <Route path={`${RouteNames.CONTRIBUTOR}/:id/:name`} element={<ContributorPage/>}/>
                <Route path={RouteNames.PROFILE} element={<ProfilePage/>}/>
                <Route path={RouteNames.WIP} element={<WipPage/>}/>
                <Route path={RouteNames.FAVOURITES} element={<FavouritesPage/>}/>
                <Route path={RouteNames.NOT_FOUND} element={<Page404/>}/>
                <Route
                    path={`${RouteNames.BOOKING}/:id`}
                    element={
                        <RequireAuth>
                            <BookingPage/>
                        </RequireAuth>
                    }
                />
                <Route
                    path={RouteNames.SUCCESS}
                    element={
                        <RequireAuth>
                            <SuccessPage/>
                        </RequireAuth>
                    }
                />
                <Route
                    path={RouteNames.SETTINGS}
                    element={
                        <RequireAuth>
                            <SettingsPage/>
                        </RequireAuth>
                    }
                />
                <Route
                    path={RouteNames.CREATE}
                    element={
                        <RequireAuth>
                            <CreatePage/>
                        </RequireAuth>
                    }
                />
                <Route
                    path={RouteNames.EDIT_PROFILE}
                    element={
                        <RequireAuth>
                            <EditProfilePage/>
                        </RequireAuth>
                    }
                />
                <Route path="*" element={<Page404/>} />
            </Route>
        </Routes>
    );
};