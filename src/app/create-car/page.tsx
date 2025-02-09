import CreateCarForm from "@/app/components/create-car-form/CreateCarForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Create car',
};

const CreateCarPage = () => {
    return (
        <CreateCarForm/>
    );
};

export default CreateCarPage;