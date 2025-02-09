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
        .min(1, {message: 'Min length 1 character'}),
    year: z.number(),
    price: z.number(),
});

export const createCar = async (prevState: State, formData: FormData):  Promise<State> => {
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
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields',
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
