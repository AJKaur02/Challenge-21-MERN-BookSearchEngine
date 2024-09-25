import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  // Set alert visibility based on error
  useEffect(() => {
    setShowAlert(!!error);
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      try {
        const response = await loginUser({ variables: { ...userFormData } });
        console.log("Login response:", response); // Debugging: Check the response structure

        // Check if token exists
        if (response.data && response.data.login && response.data.login.token) {
          Auth.login(response.data.login.token);
        } else {
          setShowAlert(true); // Show alert if token is missing
        }
      } catch (err) {
        console.error("Login error:", err); // More detailed error logging
        setShowAlert(true);
      }
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        {/* Email and Password Fields */}
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control 
            type='email' 
            placeholder='Your email' 
            name='email' 
            onChange={handleInputChange} 
            value={userFormData.email} 
            required 
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control 
            type='password' 
            placeholder='Your password' 
            name='password' 
            onChange={handleInputChange} 
            value={userFormData.password} 
            required 
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button 
          disabled={!(userFormData.email && userFormData.password)} 
          type='submit' 
          variant='success'
        >
          Log In
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
