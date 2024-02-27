'use client'
import React from 'react';
import Link from 'next/link'

const MenuItem = ({title, address, Icon}) => {
  return (
    <div>
      <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-500'>
        <Icon className='mx-4 text-2xl sm:hidden' />
        <p className="hidden my-2 text-sm sm:inline">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
