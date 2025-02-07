import {FC} from "react";
import {Metadata} from "next";
import UsersList from "@/app/ui/users-list/UsersList";

export const metadata: Metadata = {
    title: 'Users page',
    description: 'Users page description',
};

const UsersPage: FC = () => {
    return (
        <UsersList/>

    );
};

export default UsersPage;