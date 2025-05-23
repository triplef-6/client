import {FC} from "react";
import {Accordion} from "@/shared/ui";
import {MyTours} from "./myTours";
import {ToursForReview} from "./toursForReview";
import {MyReviews} from "./myReviews";
import {observer} from "mobx-react-lite";
import {authStore as auth} from "@/features";

export const ToursAccordion: FC = observer(() => {

    if (!auth.isAuth) return null

    return (
        <Accordion type={"single"} collapsible>
            <MyTours/>
            <ToursForReview/>
            <MyReviews/>
        </Accordion>
    );
})