'use server';

import {carService} from "@/services/car.api.service";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export const createCar = async (formData: FormData) => {
    const brand = formData.get('brand') as string;
    const year = Number(formData.get('year'));
    const price = Number(formData.get('price'));
    const car = {brand, year, price};
    await carService.createCar(car);
    revalidatePath('/cars')
    redirect('/cars');
};

