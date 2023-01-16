import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function Signing() {
  return (
    <div className='w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column'>
        <div className='col-sm-4'>
            <div className='card'>
                <div className='card-body'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Link to={'/signup'}>
                        <Button variant="secondary m-3" type="submit">
                            Sign Up
                        </Button>
                    </Link>
                    </Form>
                </div>
            </div>

        </div>
        </div>
       
      );
}
