import React from 'react'
import Header from './Header'
import { Navigate } from 'react-router-dom'

const myprofile = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div>
            <Header />
            <h1>This is My profile page</h1>
        </div>
    )
}

export default myprofile
