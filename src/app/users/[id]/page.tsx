import {Metadata} from "next";
import {FC} from "react";
import UserDetails from "@/app/ui/user-details/UserDetails";

export const generateMetadata = async ({params}: UserType): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: 'User page ' + id,
        description: 'User page description',
    }
};

type UserType = {
    params: { id: string };
};

const User: FC<UserType> = async ({params}) => {
    const {id} = await params;
    console.log(id);
    return (
        <UserDetails id={id}/>
    );
};

export default User;
