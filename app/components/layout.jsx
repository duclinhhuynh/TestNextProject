// components/Layout.js
'use client'
import React from 'react'
import Link from 'next/link'
const Layout = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white p-4">
                <nav className="container mx-auto">
                    <ul className="flex space-x-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/practice">Practice Questions</Link></li>
                        <li><Link href="/materials">Study Materials</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow container mx-auto p-4">{children}</main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                © 2024 Exam Prep
            </footer>
        </div>
    )
}

export default Layout
