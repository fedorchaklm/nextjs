'use client';

import {createCar} from "@/server-actions/serverActions";
import {useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {ICar} from "@/models/ICar";
import {useRef} from "react";
import Form from "next/form";

const CarSchema = z.object({
    brand: z.string().trim().min(1, {message: 'At least one char'}),
    price: z.coerce.number().min(0, {message: 'Min 0'}).max(1000000, {message: 'Too much'}),
    year: z.coerce.number().min(1990, {message: 'Min 1990'}).max(2024, {message: 'Max 2024'}),
});

type CreateCar = Omit<ICar, "id">;

const CreateCarForm = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<CreateCar>({
        resolver: zodResolver(CarSchema),
        defaultValues: {
            brand: 'BMV',
            price: 1000,
            year: 2010
        }
    });
    const formRef = useRef<HTMLFormElement>(null);

    console.log('> ', errors);

    const onSubmit = async (data: CreateCar) => {
        console.log('> onSubmit', data);
        const formData = new FormData();
        formData.append('brand', data.brand);
        formData.append('price', `${data.price}`);
        formData.append('year', `${data.year}`);
        formRef.current?.submit();
    };

    return (
        <Form ref={formRef} action={createCar} onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col items-center gap-4 text-2xl rounded-3xl w-fit px-8 py-4 m-auto my-4 bg-white'>
            <h1 className='text-3xl'>Create car</h1>
            <label htmlFor='brand'>Enter brand</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='text'
                   id='brand' {...register('brand')}
                   placeholder='brand'/>
            <div>{errors.brand?.message}</div>
            <label htmlFor='price'>Enter price</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='number'
                   id='price' {...register('price')}
                   placeholder='price'/>
            <div>{errors.price?.message}</div>
            <label htmlFor='year'>Enter year</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='number'
                   id='year' {...register('year')}
                   placeholder='year'/>
            <div>{errors.year?.message}</div>
            <button className='bg-black text-white text-2xl px-2 py-2 rounded-xl' type="submit">ADD</button>
        </Form>
    );
};

export default CreateCarForm;