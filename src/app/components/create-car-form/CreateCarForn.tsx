'use client';

import {createCar, StateType} from "@/server-actions/serverActions";
import {useForm} from "react-hook-form";
import {ICar} from "@/models/ICar";
// import {useRef} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarSchema} from "@/validation/CarSсhema";
import Form from "next/form";
import {useActionState} from "react";

type CreateCar = Omit<ICar, "id">;

const initialState = {
    message: '',
    errors: {}
};

const CreateCarForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<CreateCar>({
        mode: "onChange", resolver: joiResolver(CarSchema)
    });

    console.log('> ', errors);

    const onSubmit = async (data: CreateCar) => {
        console.log('> onSubmit', data);
        const formData = new FormData();
        formData.append('brand', data.brand);
        formData.append('price', `${data.price}`);
        formData.append('year', `${data.year}`);
    };

    const [state, formAction] = useActionState<StateType, FormData>(createCar, initialState)

    return (
        <Form action={formAction} onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col items-center gap-4 text-2xl rounded-3xl w-fit px-8 py-4 m-auto my-4 bg-white'>
            <h1 className='text-3xl'>Create car</h1>
            <label htmlFor='brand'>Enter brand</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='text'
                   id='brand' {...register('brand')}
                   placeholder='brand'/>
            <p className='text-red-500' aria-live="polite">{state.errors?.brand}</p>
            <div className='text-red-500'>{errors.brand?.message}</div>
            <label htmlFor='price'>Enter price</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='number'
                   id='price' {...register('price')}
                   placeholder='price'/>
            <p className='text-red-500' aria-live="polite">{state.errors?.price}</p>
            <div className='text-red-500'>{errors.price?.message}</div>
            <label htmlFor='year'>Enter year</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='number'
                   id='year' {...register('year')}
                   placeholder='year'/>
            <p className='text-red-500' aria-live="polite">{state.errors?.year}</p>
            <div className='text-red-500'>{errors.year?.message}</div>
            <button
                className={isValid ? 'bg-black text-white text-2xl px-2 py-2 rounded-xl' : 'bg-black text-white text-2xl px-2 py-2 rounded-xl cursor-not-allowed'}
                type="submit" disabled={!isValid}>ADD
            </button>
        </Form>
    );
};

export default CreateCarForm;