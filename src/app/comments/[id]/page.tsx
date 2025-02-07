import {Metadata} from "next";
import {FC} from "react";
import CommentDetails from "@/app/ui/comment-details/CommentDetails";

type CommentPageType = {
    params: { id: string };
}

export const generateMetadata = async ({params}: CommentPageType): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `Comment page ${id}`,
        description: 'Comment page description',
    }
};

const CommentPage: FC<CommentPageType> = async ({params}) => {
    const {id} = await params;

    return (
        <CommentDetails id={id}/>
    );
};

export default CommentPage;