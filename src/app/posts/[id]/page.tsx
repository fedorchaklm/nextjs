import {FC} from "react";
import {Metadata} from "next";

import PostDetails from "@/app/ui/post-details/PostDetails";

type PostPageType = {
    params: { id: string }
};

export const generateMetadata = async ({params}: PostPageType): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `Post page ${id}`,
        description: 'Post page description',
    }
};

const PostPage: FC<PostPageType> = async ({params}) => {
    const {id} = await params;

    return (
        <PostDetails id={id}/>
    );
};

export default PostPage;

