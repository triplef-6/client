import {FC, ReactNode} from "react";

type ParamsContainerProps = {
    children: ReactNode
}

export const ParamsContainer: FC<ParamsContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col md:flex-row md:items-center gap-1 md:gap-4"}>
            {children}
        </div>
    );
};