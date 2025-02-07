import {FC} from "react";
import {IComment} from "@/models/IComment";
import Link from "next/link";

type CommentType = {
    comment: IComment
};

const Comment: FC<CommentType> = ({comment}) => {
    return (
        <div className='flex flex-col items-center gap-2 border-black border-2 my-2 px-2'>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
            <Link className='bg-black text-white rounded px-4 mb-4' href={`/comments/${comment.id}`}>details</Link>
        </div>
    );
};

export default Comment;