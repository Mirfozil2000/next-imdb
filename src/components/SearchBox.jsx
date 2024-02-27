'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
    const [search, setSearch] = useState('')
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);        
    }
    return (
        <form onSubmit={handleSubmit} className='flex items-center justify-between max-w-6xl px-5 mx-auto'>
            <input type="text" 
            value={search} 
            placeholder='Search keywords...' 
            onChange={(e) => setSearch(e.target.value)} 
            className='flex-1 w-full placeholder-gray-500 bg-transparent rounded-sm outline-none h-14' />
            <button disabled={!search} type='submit' className="text-amber-600 disabled:text-gray-400">Search</button>
        </form>
    );
}

export default SearchBox;
