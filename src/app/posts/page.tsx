import {Metadata} from "next";
import PostsList from "@/app/ui/posts-list/PostsList";

export const metadata: Metadata = {
    title: 'Posts page',
    description: 'Posts page description'
};

const PostsPage = () => {
    return (
        <PostsList/>
    );
};

export default PostsPage;