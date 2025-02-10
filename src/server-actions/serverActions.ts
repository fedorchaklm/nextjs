'use server';

import {carService} from "@/services/car.api.service";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {CarSchema} from "@/validation/CarSсhema";
// import {ICar} from "@/models/ICar";

export type StateType = {
    payload?: FormData;
    errors?: Partial<{
        brand: string[];
        year: string[];
        price: string[];
    }>;
    message?: string | null;
}

export const createCar = async (prevState: StateType, formData: FormData): Promise<StateType> => {
    console.log(formData);
    // const brand = formData.get('brand') as string;
    // const year = Number(formData.get('year'));
    // const price = Number(formData.get('price'));

    const validatedFields = CarSchema.validate({
        brand: formData.get('brand'),
        year: formData.get('year'),
        price: formData.get('price'),
    });

    if (!validatedFields.error) {
        return {
            payload: formData,
            errors: validatedFields.error,
            message: 'Invalid Fields',
        };
    }
    // const car = CarSchema.parse({brand, year, price});
    // console.log(car);
    // const { brand, year, price } = validatedFields.data;

     console.log(validatedFields.value);
    await carService.createCar(validatedFields.value);

    revalidatePath('/cars')
    redirect('/cars');

};

