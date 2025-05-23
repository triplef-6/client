import {SelectValuesType, TourFormatBehavior} from "@/shared/types";

export const tourFormatBehaviorValues: SelectValuesType[] = [
    { value: TourFormatBehavior.WALK, label: "Пешком" },
    { value: TourFormatBehavior.BIKE, label: "Велосипед" },
    { value: TourFormatBehavior.SEGWAY, label: "Сегвей" },
    { value: TourFormatBehavior.SCOOTER, label: "Электросамокат" },
    { value: TourFormatBehavior.CAR, label: "Автомобиль" },
    { value: TourFormatBehavior.BUS, label: "Автобус" },
    { value: TourFormatBehavior.TRAM, label: "Трамвай" },
    { value: TourFormatBehavior.ATV, label: "Квадроцикл" },
    { value: TourFormatBehavior.HORSE, label: "Конная прогулка" },
    { value: TourFormatBehavior.BOAT, label: "Катер" },
    { value: TourFormatBehavior.KAYAK, label: "Каяк" },
    { value: TourFormatBehavior.SUBMARINE, label: "Подводная лодка" },
    { value: TourFormatBehavior.HELICOPTER, label: "Вертолет" },
    { value: TourFormatBehavior.BALLOON, label: "Воздушный шар" },
    { value: TourFormatBehavior.QUEST, label: "Квест" },
    { value: TourFormatBehavior.THEATRICAL, label: "Театрализованная экскурсия" },
    { value: TourFormatBehavior.GASTRONOMIC, label: "Гастрономическая экскурсия" },
    { value: TourFormatBehavior.VIRTUAL, label: "Виртуальная экскурсия" }
]