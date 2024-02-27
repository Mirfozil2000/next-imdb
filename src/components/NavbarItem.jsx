'use client'
import React from 'react';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

const NavbarItem = ({ title, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre')
    return (
        <div>
            <Link className={`p-2 m-4 font-semibold hover:text-amber-600 ${genre && genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'}`} href={`/?genre=${param}`}>
                {title}
            </Link>
        </div>
    );
}

export default NavbarItem;
