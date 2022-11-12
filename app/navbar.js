import Link from 'next/link';

export default function NavBar() {
    return (
        <header className='container flex justify-between items-center py-5'>
            <Link href="/">Home</Link>
            <nav className='flex gap-3'>
                <Link href="/">sd</Link>
                <Link href="/posts">Blog</Link>
            </nav>
        </header>
    )
}