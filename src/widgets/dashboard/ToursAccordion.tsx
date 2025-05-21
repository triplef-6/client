import {FC} from "react";
import {Accordion} from "@/shared/ui";
import {MyTours} from "./myTours";
import {ToursForReview} from "./toursForReview";

export const ToursAccordion: FC = () => {
    return (
        <Accordion type={"single"} collapsible>
            <MyTours/>
            <ToursForReview/>
        </Accordion>
    );
};