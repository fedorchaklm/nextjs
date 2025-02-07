import {apiService} from "@/services/api.service";
import {IUser} from "@/models/IUser";
import User from "@/app/ui/user/User";

const UsersList = async () => {
    const users: Array<IUser> = await apiService<Array<IUser>>('/users');

    return (
        <>
            {users.map((user: IUser) => <User key={user.id} user={user}/>)}
        </>
    );
};

export default UsersList;