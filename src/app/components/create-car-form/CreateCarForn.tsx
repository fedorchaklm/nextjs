import Form from "next/form";
import {createCar} from "@/server-actions/serverActions";

const CreateCarForm = () => {
    return (
        <Form action={createCar}
              className='flex flex-col items-center gap-4 text-2xl rounded-3xl w-fit px-8 py-4 m-auto my-4 bg-white'>
            <h1 className='text-3xl'>Create car</h1>
            <label htmlFor='brand'>Enter brand</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='text' id='brand' name='brand'
                   placeholder='brand' required/>
            <label htmlFor='price'>Enter price</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='number' id='price' name='price'
                   placeholder='price' required/>
            <label htmlFor='year'>Enter year</label>
            <input className='border-2 border-gray-500 rounded-xl block pl-4 py-2' type='number' id='year' name='year'
                   placeholder='year' required/>
            <button className='bg-black text-white text-2xl px-2 py-2 rounded-xl' type="submit">ADD</button>
        </Form>
    );
};

export default CreateCarForm;