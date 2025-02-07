import {FC} from "react";
import {postService} from "@/services/api.service";
import {IPost} from "@/models/IPost";

type PostDetailsType = {
    id: string;
};

const PostDetails: FC<PostDetailsType> = async ({id}) => {
    const post: IPost = await postService.getPostById(id);

    return (
        <div>
            <h1>Details: </h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;