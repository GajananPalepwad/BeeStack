import React from 'react'
import './LoadingPage.css'

const LoadingPage = () => {
    return (
        <>
            <div className="loading-page flex flex-col items-center py-40 h-screen w-screen">
                <div className="logo w-60 h-60">
                    <img src="/logo.png" alt="BeeStack" className='w-full h-full object-contain'/>
                </div>
                <div className="BeeStackname text-4xl py-5" >
                    <h1>BeeStack</h1>
                </div>
                <div className="loader my-20"></div>
            </div>
        </>
    )
}

export default LoadingPage
