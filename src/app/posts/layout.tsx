import {PropsWithChildren} from "react";

const PostsLayout = ({children}: PropsWithChildren) => {
    return (
        <div className='flex justify-center items-center px-4'>
            {children}
        </div>
    );
};

export default PostsLayout;