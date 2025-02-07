import {FC} from "react";
import {IUser} from "@/models/IUser";

type UserDetailsType = {
    user: IUser
};

const UserDetails: FC<UserDetailsType> = ({user}) => {
    return (
        <>
            details: {user.id} {user.name} {user.email}
        </>
    );
};

export default UserDetails;