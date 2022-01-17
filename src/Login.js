import React,{useState,} from 'react'
// import axios from 'axios'

import { Navigate } from 'react-router-dom'

const Login = () => {
    const [auth,setAuth] = useState(false)
    const [data,setData] = useState({
       
        email:'',
        password:'',
        
    })

    const {email,password} = data
    const changehandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submithandler = e =>{
        e.preventDefault();
        if(email==="tharun@gmail.com"&&password==="12"){
            localStorage.setItem('token',"Th@run");
            setAuth(true);
        }
        console.log(data)
    }

    if(auth){
        return <Navigate to='/myprofile' />
    }
    

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
