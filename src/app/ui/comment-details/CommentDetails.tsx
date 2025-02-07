import {FC} from "react";
import {commentService} from "@/services/api.service";
import {IComment} from "@/models/IComment";

type CommentDetailsType = {
    id: string;
};

const CommentDetails: FC<CommentDetailsType> = async ({id}) => {
    const comment: IComment = await commentService.getCommentById(id);

    return (
        <div>
            <h1>Details: </h1>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentDetails;