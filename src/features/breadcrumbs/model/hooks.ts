import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { RouteNames } from "@/shared/types";
import { BreadcrumbType } from "./types.ts";
import { routesConfig } from "@/features/breadcrumbs/config";

export const useBreadcrumbs = (): BreadcrumbType[] => {

    const location = useLocation()

    const initialState: BreadcrumbType[] = useMemo(() => {
        return [routesConfig.get(RouteNames.MAIN)!]
    }, [])

    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>(() => {
        const savedBreadcrumbs = localStorage.getItem("breadcrumbs")
        return savedBreadcrumbs ? JSON.parse(savedBreadcrumbs) : initialState
    })

    useEffect(() => {

        const pathParts: string[] = location.pathname.split("/").filter(Boolean)
        const isLastZero = pathParts[pathParts.length - 1] === "0"

        const labelKey = isLastZero
            ? pathParts[pathParts.length - 2]
            : pathParts[pathParts.length - 1]

        const cleanPathParts = isLastZero ? pathParts.slice(0, -1) : pathParts
        const currentPath = `/${cleanPathParts.join("/")}`

        const currentRoute: BreadcrumbType | undefined = routesConfig.get(labelKey)
        const currentLabel: string = currentRoute?.label ?? labelKey ?? RouteNames.MAIN

        setBreadcrumbs((prev) => {

            const filteredBreadcrumbs = prev.filter(
                (crumb) => crumb.path !== currentPath
            )

            if (currentPath === `/${RouteNames.MAIN}`) return initialState

            const updatedBreadcrumbs = [
                ...filteredBreadcrumbs,
                { path: currentPath, label: decodeURIComponent(currentLabel) },
            ]

            localStorage.setItem("breadcrumbs", JSON.stringify(updatedBreadcrumbs))

            return updatedBreadcrumbs

        })

    }, [initialState, location])

    return breadcrumbs

}