import {FC} from "react";
import {IPost} from "@/models/IPost";
import Link from "next/link";

type PostType = {
    post: IPost
};

const Post: FC<PostType> = ({post}) => {
    return (
        <div className='flex flex-col items-center gap-2 border-black border-2 my-2 px-2'>
            <p>{post.title}</p>
            <Link className='bg-black text-white rounded px-4 mb-4' href={`/posts/${post.id}`}>details</Link>
        </div>
    );
};

export default Post;