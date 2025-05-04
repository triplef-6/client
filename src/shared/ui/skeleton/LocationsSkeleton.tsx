import {Skeleton} from "@/shared/ui";

export const LocationsSkeleton = () => {
    return (
        <div className={"flex flex-row justify-center flex-wrap gap-4 items-center lg:w-4/5 wide:w-full"}>
            <Skeleton className={"w-56 h-80 rounded-xl"}/>
            <Skeleton className={"w-56 h-80 rounded-xl max-lg:hidden"}/>
            <Skeleton className={"w-56 h-80 rounded-xl max-lg:hidden"}/>
            <Skeleton className={"w-56 h-80 rounded-xl max-lg:hidden"}/>
        </div>
    );
};