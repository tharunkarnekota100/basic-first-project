import React from 'react'
import Header from './Header'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    return (
        <div>
            <Header />
            <h1>This is dashboard page</h1>
        </div>
    )
}

export default Dashboard
