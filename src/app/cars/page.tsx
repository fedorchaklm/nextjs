import {Metadata} from "next";
import CarsList from "@/app/components/cars-list/CarsList";

export const metadata: Metadata = {
    title: 'Cars page',
    description: 'Cars page description'
};

const CarsPage = () => {
    return (
        <>
            <CarsList/>
        </>
    );
};

export default CarsPage;