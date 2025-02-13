'use server';

import {carService} from "@/services/car.api.service";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {cookies} from 'next/headers';
import {setCookie, getCookie} from 'cookies-next';
import {authService} from "@/services/auth.api.service";
import {IUserWithTokens} from "@/models/IUserWithTokens";
import {isRedirectError} from "next/dist/client/components/redirect-error";

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

type StateType = {
    formData?: IUserWithTokens;
    errors?: string;
}

export const loginUser = async (prevState: StateType, formData: FormData): Promise<StateType> => {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const user = {username, password};

    try {
        const userWithTokens: IUserWithTokens = await authService.login(user);
        await setCookie('accesstoken', JSON.stringify(userWithTokens.accessToken), {cookies});
        await setCookie('refreshtoken', JSON.stringify(userWithTokens.refreshToken), {cookies});
        prevState.formData = userWithTokens;
        redirect('/');
    } catch (e) {
        if (isRedirectError(e)) {
            throw e;
        }
        if (e instanceof Error) {
            console.log('>', e.message);
            return {
                errors: e.message,
            }
        } else {
            return {
                errors: 'something went wrong',
            }
        }
    }
};

