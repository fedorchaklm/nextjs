import {IUser} from '@/models/IUser';
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";

export const userService = {
    getAllUsers: async (): Promise<Array<IUser>> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        return await res.json();
    },
    getUserById: async (id: string): Promise<IUser> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        return await res.json();
    }
};

export const postService = {
    getAllPosts: async (): Promise<Array<IPost>> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await res.json();
    },
    getPostById: async (id: string): Promise<IPost> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
        return await res.json();
    }
};

export const commentService = {
    getAllComments: async (): Promise<Array<IComment>> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        return await res.json();
    },
    getCommentById: async (id: string): Promise<IComment> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments/' + id);
        return await res.json();
    }
};