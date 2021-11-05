
import { ChangeEvent } from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/actionCreators/auth'
import { registerInfo } from '../redux/globalInterfaces'
import '../styles/Register.css'




const Register = () => {

    const [registerData, setRegisterData] = useState<registerInfo>({
        full_name: "",
        user_email: "",
        user_password: "",
        admin: false,
        role: ""
    })

    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(registerUser(registerData))
        setRegisterData({
            full_name: "",
            user_email: "",
            user_password: "",
            admin: false,
            role: ""
        })
    }

    const { full_name, user_email, user_password, admin, role } = registerData

    return (
        <div className='register-container'>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit} className="form">

                <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control value={full_name} onChange={handleChange} name="full_name" required type="fullName" placeholder="full name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={user_email} onChange={handleChange} name="user_email" required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={user_password} onChange={handleChange} name="user_password" required type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="radios" >
                    <Form.Label as="legend" column sm={2}>
                        Signup as:
                    </Form.Label>

                    <Form.Check
                        type="radio"
                        label="hirer"
                        name="role"
                        id="role"
                        value="client"
                        required
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="radio"
                        label="worker"
                        name="role"
                        id="role"
                        value="worker"
                        required
                        onChange={handleChange}
                    />


                </Form.Group>

                <Button className='form-btn' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Register
