import {Metadata} from "next";
import {LoginForm} from "@/components/login-form/LoginForm";

export const metadata: Metadata = {
    title: 'Login page',
    description: 'Login page description'
};

const CarsPage = async () => {
    return (
        <LoginForm/>
    );
};

export default CarsPage;