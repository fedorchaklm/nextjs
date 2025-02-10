'use server';
import {carService} from "@/services/car.api.service";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {z} from 'zod';

export type State = {
    payload?: FormData;
    errors?: Partial<{
        brand: string[];
        year: string[];
        price: string[];
    }>;
    message: string | null;
};

const CarSchema = z.object({
    brand: z.string()
        .min(1, {message: 'Min length 1 character'})
        .max(20, {message: 'Max length 20 characters'})
        .regex(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'), {message: 'Max length 20 characters'}),
    year: z.coerce.number()
        .min(1990, {message: 'Min year 1990'})
        .max(2024, {message: 'Max year 2024'}),
    price: z.coerce.number()
        .min(0, {message: 'Min price 0'})
        .max(1000000, {message: 'Max price 1000000'}),
});

export const createCar = async (prevState: State, formData: FormData): Promise<State> => {
    console.log(formData);
    // const brand = formData.get('brand') as string;
    // const year = Number(formData.get('year'));
    // const price = Number(formData.get('price'));

    const validatedFields = CarSchema.safeParse({
        brand: formData.get('brand'),
        year: formData.get('year'),
        price: formData.get('price'),
    });

    if (!validatedFields.success) {
        return {
            payload: formData,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid Fields',
        };
    }
    // const car = CarSchema.parse({brand, year, price});
    // console.log(car);
    // const { brand, year, price } = validatedFields.data;
    console.log(validatedFields.data);
    await carService.createCar(validatedFields.data);

    revalidatePath('/cars')
    redirect('/cars');

};
