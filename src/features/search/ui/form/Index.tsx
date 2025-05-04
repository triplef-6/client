import {FC} from "react";
import {useWindowSize} from "usehooks-ts";

import {Orientation} from "@/features";

import {Container, Header} from "./containers";
import {DatePicker} from "./DatePicker.tsx";
import {SelectAccessibility} from "./SelectAccessibility.tsx";
import {SwitchByCity} from "./SwitchByCity.tsx";
import {Input} from "./Input.tsx";
import {SubmitButton} from "./SubmitButton.tsx";

type FormProps = {
    orientation: Orientation
}

export const Index: FC<FormProps> = ({orientation}) => {

    const {width} = useWindowSize()
    
    return (
        <Container orientation={orientation}>
            <Header orientation={orientation}>
                <Input/>
                <DatePicker/>
                <SelectAccessibility/>
                {(width < 1440 || orientation === Orientation.VERTICAL) && <SwitchByCity orientation={orientation}/>}
                <SubmitButton orientation={orientation}/>
            </Header>
            {orientation === Orientation.HORIZONTAL && width > 1440 && <SwitchByCity orientation={orientation}/>}
        </Container>
    );
};