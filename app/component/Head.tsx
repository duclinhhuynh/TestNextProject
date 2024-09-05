'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Head = () => {
    const router = useRouter();
    const handleClicktoLogin = () => {
        router.push('/Login');
    }
    return (
        <nav className='flex flex-col gap-2'>
            <Link href="/">
                Home
            </Link>

            <Link
                href="/Login"
            >
                Login
            </Link>
            <Link
                href="/Register"
            >
                Register
            </Link>
            <div>
                <button onClick={handleClicktoLogin}>swap to login</button>

            </div>
        </nav>
    )
}

export default Head