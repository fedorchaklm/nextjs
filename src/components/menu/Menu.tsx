import Link from "next/link";

const Menu = () => {
    return (
        <ul className='flex gap-2 w-full bg-black text-white text-2xl px-4 py-4'>
            <li className='hover:text-amber-200'>
                <Link href='/'>Home</Link>
            </li>
            <li className='hover:text-amber-200'>
                <Link href='/cars'>Cars</Link>
            </li>
            <li className='hover:text-amber-200'>
                <Link href='/auth'>Login</Link>
            </li>
        </ul>
    );
};

export default Menu;