import {carService} from "@/services/car.api.service";
import Car from "@/components/car/Car";
import {ICar} from "@/models/ICar";
import Link from "next/link";

const CarsList = async () => {
    const cars = await carService.getAll();

    return (
        <div className='flex flex-row justify-center gap-4'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-3xl'>Cars: </h1>
                {cars.map((car: ICar) => <Car key={car.id} car={car}/>)}
            </div>
            <div className='flex flex-col items-center gap-2 pl-8 pt-1 text-2xl'>
                <Link className='bg-black text-white text-5xl rounded-3xl px-4'
                      href={'/create-car'}>+</Link>
                <p>Add new car</p>
            </div>
        </div>

    )
        ;
}

export default CarsList;