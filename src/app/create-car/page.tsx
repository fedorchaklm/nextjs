import CreateCarForm from "@/app/components/create-car-form/CreateCarForn";
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