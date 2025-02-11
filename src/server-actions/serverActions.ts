'use server';

import {carService} from "@/services/car.api.service";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {cookies} from 'next/headers';
import {setCookie, getCookie} from 'cookies-next';

export const createCar = async (formData: FormData) => {
    const cookieStore = await cookies();
    const brand = formData.get('brand') as string;
    const year = Number(formData.get('year'));
    const price = Number(formData.get('price'));
    const car = {brand, year, price};
    cookieStore.set('car', JSON.stringify(car));
    await setCookie('key', 'value', {cookies});
    const a = await getCookie('key', {cookies});
    console.log(a);
    const cookie = cookieStore.get('car');
    console.log(cookie);
    try {
        await carService.createCar(car);
    } catch (e) {
        console.log(e);
    } finally {
        revalidatePath('/cars')
        redirect('/cars');
    }
};

