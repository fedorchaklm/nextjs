import {urls} from "@/constants/constants";
import {ICar} from "@/models/ICar";

export const carService = {
    getAll: async (): Promise<Array<ICar>> => {
        const res = await fetch(`${urls.BASE_URL}/cars`);
        return res.json();
    },
    getById: async (id: string): Promise<ICar> => {
        const res = await fetch(`${urls.BASE_URL}/cars/${id}`);
        return res.json();
    },
    createCar: async (car: Omit<ICar, 'id'>): Promise<ICar> => {
        const res = await fetch(`${urls.BASE_URL}/cars`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(car),
        });
        return res.json();
    }
};