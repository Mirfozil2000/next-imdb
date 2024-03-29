'use client'
import { useEffect } from "react"
const error = () => {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className='mt-10 text-center'>
            <h1>Something went wrong</h1>
            <button className="hover:text-amber-600" onClick={() => reset()}>Try again</button>
        </div>
    )
}

export default error