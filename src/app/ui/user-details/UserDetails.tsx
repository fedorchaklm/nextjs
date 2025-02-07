import {FC} from "react";
import {userService} from "@/services/api.service";

type UserDetailsType = {
    id: string;
};

const UserDetails: FC<UserDetailsType> = async ({id}) => {
    const user = await userService.getUserById(id);

    return (
        <div>
            <h1>Details: </h1>
            <p>{user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetails;