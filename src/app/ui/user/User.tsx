import {IUser} from "@/models/IUser";
import {FC} from "react";
import Link from "next/link";

type UserType = {
    user: IUser
};

const User: FC<UserType> = ({user}) => {
    return (
        <div className='flex flex-col items-center gap-2'>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <Link className='text-white bg-black rounded px-4' href={`/users/${user.id}`}>Details</Link>
        </div>
    );
};

export default User;