import { Button, Form } from 'react-bootstrap'
import '../../styles/ClientCreateProfile.css'

const ClientCreateProfile = () => {

    return (
        <div className='create-profile-container'>
            <div className='create-details'>
            <h1>Create profile</h1>
                <Form className="form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nick</Form.Label>
                        <Form.Control name="nick" required type="text" placeholder="Enter nick" />
        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Location</Form.Label>
                        <Form.Control name="location" required type="text" placeholder="Enter location" />
                    </Form.Group>




                    <Button className='form-btn mt-3' variant="primary" type="submit">
                        create profile
                    </Button>
                </Form>
            </div>

            <div className="create-pic">
                         <input type='file' />
            </div>
        </div>
    )
}

export default ClientCreateProfile
