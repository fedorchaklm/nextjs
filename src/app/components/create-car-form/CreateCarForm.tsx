'use client';

import {createCar, State} from "@/server-actions/serverActions";
import {useActionState} from "react";
import Form from "next/form";

const initialState = {
    message: '',
    errors: {}
};

const CreateCarForm = () => {
    const [state, formAction] = useActionState<State, FormData>(createCar, initialState);
    const brand = state.payload?.get("brand")?.toString() ?? '';
    const price = state.payload?.get("price")?.toString() ?? 0;
    const year = state.payload?.get("year")?.toString() ?? 0;

    console.log('>', state);

    return (
        <Form action={formAction}
              className='flex flex-col items-center gap-4 text-2xl rounded-3xl w-fit px-8 py-4 m-auto my-4 bg-white'>
            <h1 className='text-3xl'>Create car</h1>
            <label htmlFor='brand'>Enter brand</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='text' id='brand' name='brand'
                   placeholder='brand' defaultValue={brand}/>
            {state.errors?.brand && <p className='text-red-500' aria-live="polite">{state.errors.brand}</p>}
            <label htmlFor='price'>Enter price</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='number' id='price' name='price'
                   placeholder='price' defaultValue={price}/>
            {state.errors?.price && <p className='text-red-500' aria-live="polite">{state.errors.price}</p>}
            <label htmlFor='year'>Enter year</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='number' id='year' name='year'
                   placeholder='year' defaultValue={year}/>
            {state.errors?.year && <p className='text-red-500' aria-live="polite">{state.errors.year}</p>}
            <button className='bg-black text-white text-2xl px-2 py-2 rounded-xl' type="submit">ADD</button>
            {state.message && <p className='text-red-500' aria-live="polite">{state.message}</p>}
        </Form>
    );
};

export default CreateCarForm;