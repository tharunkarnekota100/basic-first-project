import React,{useState,} from 'react'
// import axios from 'axios'

import { Navigate } from 'react-router-dom'

const Login = () => {
    
    const [data,setData] = useState({
       
        email:'',
        password:'',
        
    })

    const changehandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submithandler = e =>{
        e.preventDefault();
        // axios.post('http://localhost:5000/login',data).then(
        //     res => setToken(res.data.token)
        // )
        console.log(data)
    }

    // if(token){
    //     return <Navigate to='/myprofile' />
    // }
    

    return (
        <div>
            <center>
                <form onSubmit={submithandler} autoComplete="off">
                    <h2><b>Login</b></h2>
                    
                    <input type="email" name="email" onChange={changehandler} placeholder="email" /><br />
                    <input type="password" name="password" onChange={changehandler} placeholder="password" /><br />
                    
                    <input type="submit" className="btn btn-primary" value="sigin" /><br />
                </form>
            </center>
        </div>
    )
}

export default Login
