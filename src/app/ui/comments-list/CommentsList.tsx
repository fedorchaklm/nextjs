import {IComment} from "@/models/IComment";
import {commentService} from "@/services/api.service";
import Comment from '@/app/ui/comment/Comment';

const CommentsList = async () => {
    const comments: Array<IComment> = await commentService.getAllComments();

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl'>Comments:</h1>
            {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsList;