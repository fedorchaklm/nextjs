import {Metadata} from "next";
import CommentsList from "@/app/ui/comments-list/CommentsList";

export const metadata: Metadata = {
    title: 'Comments page',
    description: 'Comments page description'
}

const CommentsPage = () => {
    return (
        <CommentsList/>
    );
};

export default CommentsPage;