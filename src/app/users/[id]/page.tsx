import UserDetails from "@/app/ui/user-details/UserDetails";
import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

type UserPageType = {
    params: Promise<{ id: string }>;
    searchParams: Promise<SearchParams>
};

const UserPage: FC<UserPageType> = async ({params, searchParams}) => {
    const {id} = await params;
    console.log(id);
    const {data} = await searchParams;
    let user = null;
    if (typeof data === 'string') {
        user = JSON.parse(data) as IUser;
    }

    return (
        user && <UserDetails user={user}/>
    );
};

export default UserPage;