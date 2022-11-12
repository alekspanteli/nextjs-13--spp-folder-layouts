import { use } from 'react'

async function getPost(id) {
    const post = await fetch(`https://dummyjson.com/posts/${id}`);
    return post.json();
}

export default function Page({params}){
    let id = params.id;
    let post = use(getPost(id));
    return <div>
        <h3>{post.title}</h3>
        <h3>{post.body}</h3>
    </div>
}