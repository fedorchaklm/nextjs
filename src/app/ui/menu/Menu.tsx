import Link from 'next/link';

export const Menu = () => {
    return (
        <ul className='flex flex-row gap-4 px-4 py-4 w-full bg-black text-white text-2xl'>
            <li className='hover:text-amber-200'>
                <Link href='/'>Home</Link>
            </li>
            <li className='hover:text-amber-200'>
                <Link href='/users'>Users</Link>
            </li>
            <li className='hover:text-amber-200'>
                <Link href='/posts'>Posts</Link>
            </li>
            <li className='hover:text-amber-200'>
                <Link href='/comments'>Comments</Link>
            </li>
        </ul>
    );
};