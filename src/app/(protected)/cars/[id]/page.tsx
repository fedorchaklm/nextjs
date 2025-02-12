import CarDetails from "@/components/car-details/CarDetails";
import {FC} from "react";
import {Metadata} from "next";

type CarPageType = {
    params: Promise<{ id: string }>
};

export const generateMetadata = async ({params}: CarPageType): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `Car page ${id}`,
        description: 'Car page description'
    }
};

const CarPage: FC<CarPageType> = async ({params}) => {
    const {id} = await params;

    return (
        <CarDetails id={id}/>
    );
};

export default CarPage;