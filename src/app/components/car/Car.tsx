import {ICar} from "@/models/ICar";
import {FC} from "react";
import Link from "next/link";

type CarType = {
    car: ICar
};

const Car: FC<CarType> = ({car}) => {

    return (
        <div className='flex flex-row justify-center items-center gap-4 min-w-72 px-4 py-4 bg-white rounded-xl hover:bg-gray-300 cursor-pointer'>
            <p>{car.brand}</p>
            <Link className='bg-black text-white text-xl px-2 rounded-xl hover:text-amber-200' href={`/cars/${car.id}`}>details</Link>
        </div>
    );
}

export default Car;