import React from 'react'
import Footer from '@components/Footer'

export default function BlogLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}
