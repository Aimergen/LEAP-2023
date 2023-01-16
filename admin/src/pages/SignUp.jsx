import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function SignUp() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <Form>
            <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
            <Form.Label>Re Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </div>
  )
}
