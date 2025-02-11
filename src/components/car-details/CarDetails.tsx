import {FC} from "react";
import {carService} from "@/services/car.api.service";
import {ICar} from "@/models/ICar";

type CarDetailsType = {
    id: string;
};

const CarDetails: FC<CarDetailsType> = async ({id}) => {
    const car: ICar = await carService.getById(id);

    return (
        <div
            className='flex flex-col items-start min-w-72 px-4 bg-white'>
            <p>Brand: {car.brand}, {car.year} year</p>
            <p>Price: {car.price}$</p>
        </div>
    );
}

export default CarDetails;