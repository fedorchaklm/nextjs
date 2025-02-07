import {FC} from "react";

type CommentsLayoutType = {
    children: React.ReactNode;
};

const CommentsLayout: FC<CommentsLayoutType> = ({children}) => {
    return (
        <div className='flex justify-center items-center px-4' >
            {children}
        </div>
    );
};

export default CommentsLayout;