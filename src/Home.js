import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <center>
            <h1>chat app</h1>
            <Link to="/login" className='btn btn-success'>Signin</Link> &nbsp;&nbsp;<Link to="/register" className='btn btn-primary'>Signup</Link>
            </center>
        </div>
    )
}

export default Home
