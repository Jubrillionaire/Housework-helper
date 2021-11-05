
import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Col, Form,  } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actionCreators/auth';
import { loginInfo } from '../redux/globalInterfaces';
import {RootState} from '../redux/reducers'
import '../styles/Login.css'


const Login = (props: any) => {

    const {role} = useSelector((state: RootState) => state.auth.registerInfo)


    const [loginData, setLoginData] = useState<loginInfo>({
        user_email: "",
        user_password: ""
    })


    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser(loginData))
    
        setLoginData({
            user_email: "",
            user_password: ""
                })
               
             
    
    }

    const { user_email, user_password } = loginData


    return (
        <div className='login-container'>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit} className="form">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange} value={user_email}  name="user_email" required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} value={user_password} name="user_password" required type="password" placeholder="Password" />
                </Form.Group>

              
    

                <Button className='form-btn' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login
