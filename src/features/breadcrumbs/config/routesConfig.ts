import {RouteNames} from "@/shared/types";
import {BreadcrumbType} from "@/features/breadcrumbs/model/types.ts";

export const routesConfig = new Map<string, BreadcrumbType>([
    [RouteNames.MAIN, { path: `/${RouteNames.MAIN}`, label: "Экскурсии" }],
    [RouteNames.ON_BOARDING, { path: `/${RouteNames.ON_BOARDING}`, label: "Онбординг" }],
    [RouteNames.LOCATIONS, { path: `/${RouteNames.LOCATIONS}`, label: "Локации" }],
    [RouteNames.TOURS, { path: `/${RouteNames.TOURS}`, label: "Экскурсии" }],
    [RouteNames.TOUR, { path: `/${RouteNames.TOUR}`, label: "Экскурсия" }],
    [RouteNames.CONTRIBUTOR, { path: `/${RouteNames.CONTRIBUTOR}`, label: "Контрибьютор" }],
    [RouteNames.PROFILE, { path: `/${RouteNames.PROFILE}`, label: "Путешественник" }],
    [RouteNames.FAVOURITES, { path: `/${RouteNames.FAVOURITES}`, label: "Избранное" }],
    [RouteNames.CREATE, { path: `/${RouteNames.CREATE}`, label: "Создать" }],
    [RouteNames.SETTINGS, { path: `/${RouteNames.SETTINGS}`, label: "Настройки" }],
    [RouteNames.WIP, { path: `/${RouteNames.WIP}`, label: "Страница в разработке" }],
    [RouteNames.SUCCESS, { path: `/${RouteNames.SUCCESS}`, label: "Успешно" }],
    [RouteNames.BOOKING, { path: `/${RouteNames.BOOKING}`, label: "Бронирование" }],
    [RouteNames.AUTH, { path: `/${RouteNames.AUTH}`, label: "Войти" }],
    [RouteNames.EDIT_PROFILE, { path: `/${RouteNames.EDIT_PROFILE}`, label: "Редактировать профиль" }],
])