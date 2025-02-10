'use server';

import {carService} from "@/services/car.api.service";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
// import {ICar} from "@/models/ICar";

type StateType = {
    payload?: FormData;
    errors?: Partial<{
        customerId: string[];
        amount: string[];
        status: string[];
    }>;
    message?: string | null;
}

export const createCar = async (prevState: StateType , formData: FormData) => {
    console.log('> createCar', formData);
    const brand = formData.get('brand') as string;
    const year = Number(formData.get('year'));
    const price = Number(formData.get('price'));

    const car = {brand, year, price};
    console.log(car);

    try {
        await carService.createCar(car);
        // return {message: 'success', data};
    } catch (e) {
        console.log(e);
        // return {message: 'fetch failed'};
    } finally {
        revalidatePath('/cars');
        redirect('/cars');
    }
};

