import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import TOAST_CONFIG from '../utils/configs';



export default function SignUp() {

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [repassword, setRepassword]=useState('');

    const navigate=useNavigate();

    const submitSignup=()=>{

        let status= 200;

        fetch('https://demo-api-one.vercel.app/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password, repassword}),
        })
        .then((res)=>{
            status=res.status;
            return res.json()
        })
        .then((data)=>{
           if(status !==200){
            toast.error(data.message, TOAST_CONFIG);
           } else{
            toast.success(data.message, TOAST_CONFIG);
            setTimeout(()=>{
                navigate('/signin');
            },1000);
           }
        })   
        .catch((err)=>{
            toast.error(err.message, TOAST_CONFIG);
        });
    };

  return (
    <div className='d-flex justify-content-center align-items-center'>
        <Form
        onSubmit={(e)=>{
            e.preventDefault();
            submitSignup();
        }}
        >
            <Form.Group className='mb-3'
            controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            /> 
            </Form.Group>
            <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
            <Form.Label>Re Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="RePassword" 
            value={repassword}
            onChange={(e)=>setRepassword(e.target.value)}/>
            </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    <ToastContainer />
    </div>
  )
}
