import React from 'react'

const Layout = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow container mx-auto px-4 sm:px-6">
                {children}
            </main>
        </div>
    )
}

export default Layout
