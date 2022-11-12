import { use } from 'react'
import Link from 'next/link';

async function getData() {
    const posts = await fetch('https://dummyjson.com/posts?limit=3');
    return posts.json();
}


export default function Layout({children}) {
    let { posts } = use(getData());
    // console.log(posts);

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>

            <div>{children}</div>
        </>
    )
}