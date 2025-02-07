import {IUser} from "@/models/IUser";
import {FC} from "react";
import Link from "next/link";

type UserType = {
    user: IUser
};

const User: FC<UserType> = ({user}) => {
    return (
        <div className='flex flex-col items-center gap-2 mt-2'>
            <div key={user.id}>{user.name}</div>
            <Link className='bg-black text-white shadow px-2 py-2 rounded hover:text-amber-200'
                  href={{pathname: `/users/${user.id}`, query: {data: JSON.stringify(user)}}}>details</Link>
        </div>
    );
};

export default User;