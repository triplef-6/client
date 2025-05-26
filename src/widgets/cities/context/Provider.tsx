import {FC, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {WidgetContext} from "./context.ts"
import {useLocations} from "@/entities";
import {searchLocation, searchTourStore as store} from "@/features";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "@/shared/types";

export const Provider: FC<{children: ReactNode}> = ({children}) => {

    const navigate = useNavigate()
    const {data: locations} = useLocations()
    const [city, setCity] = useState<string>("")
    const [isActive, setIsActive] = useState<boolean>(false)
    const [cities, setCities] = useState<string[]>([])

    useEffect(() => {
        setCity(city || "А")
        setCities(searchLocation(city || "А", locations))
    }, [city, locations])

    const focus = useCallback(() => {
        setIsActive(true)
        setCities([])
    }, [])

    const blur = useCallback(() => {
        setIsActive(false)
        setCities(searchLocation(city, locations))
    }, [city, locations])

    const selectCity = useCallback((city: string) => {

        const foundLocation = locations.find(i => i.city === city)

        if (foundLocation) {
            store.searchParams.location = foundLocation
            navigate(`/${RouteNames.MAIN}`)
        }

    }, [])
    
    const context = useMemo(() => ({
        city, isActive, cities
    }), [cities, city, isActive])

    return (
        <WidgetContext.Provider value={{ context, selectCity, update: setCity, blur, focus }}>
            {children}
        </WidgetContext.Provider>
    )
}