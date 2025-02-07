import {userService} from "@/services/api.service";
import {IUser} from "@/models/IUser";
import User from '@/app/ui/user/User';

const UsersList = async () => {
    const users: Array<IUser> = await userService.getAllUsers();
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl'>Users:</h1>
            {users.map((user: IUser) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersList;