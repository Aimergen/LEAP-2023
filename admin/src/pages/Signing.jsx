import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { json, Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import TOAST_CONFIG from '../utils/configs';
import axios from 'axios';


export default function Signing() {
    const [email, setEmail] =useState('');
    const [password, setPassword]= useState('');
    const navigate= useNavigate();

    const submitSignIn=()=>{

        axios
            .post('https://demo-api-one.vercel.app/api/signin',{email, password})
            .then((res)=>{
                toast.success(res.data.message, TOAST_CONFIG);
                localStorage.setItem('token', res.data.body);
                navigate('/signin/success');
            })
            .catch((e)=>{
                const errMsg=e.response.data.message || 'Aldaa garlaa';
                toast.error(errMsg, TOAST_CONFIG);
            });
        // fetch('https://demo-api-one.vercel.app/api/signin', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({email, password}),
        // })
        // .then((res)=> {
        //     status = res.status;
        //     return res.json();
        // })
        // .then((data)=>{
        //     if(status !==200){
        //         toast.error(data.message, TOAST_CONFIG)
        //     }else{
        //         toast.success(data.message, TOAST_CONFIG);
        //         localStorage.setItem('token', data.body);
        //         navigate('/signin/success');
        //     }
        // })
        // .catch((err)=>{
        //     console.log(err);
        // });
    };
  return (
    <div className='w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column'>
        <div className='col-sm-4'>
            <div className='card'>
                <div className='card-body'>
                <Form
                onSubmit={(e)=>{
                    e.preventDefault();
                    submitSignIn();
                }}
                >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                         />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                         placeholder="Password" 
                         value={password}
                         onChange={(e)=>{
                            setPassword(e.target.value);
                         }}
                         />
                    </Form.Group>
                 <div className='d-flex justify-content-end'>

                    <Button variant="primary" type="submit">
                        Sign in
                    </Button>
                    <Link to={'/signup'}>
                        <Button variant="secondary m-3" type="submit">
                            Sign Up
                        </Button>
                    </Link>
                 </div>
                    </Form>
                </div>
            </div>

        </div>
        <ToastContainer />
        </div>    
      );
}
