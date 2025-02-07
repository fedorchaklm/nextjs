import {postService} from "@/services/api.service";
import {IPost} from "@/models/IPost";
import Post from "@/app/ui/post/Post";

const PostsList = async () => {
    const posts: Array<IPost> = await postService.getAllPosts();

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl'>Posts:</h1>
            {posts.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsList;