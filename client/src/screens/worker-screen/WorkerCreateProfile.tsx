import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { Button, Form, FormControl, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { createWorkerProfile, postWorkersProfiles, updateWorkerProfile } from '../../redux/actionCreators/profiles';
import ReactTagInput from "@pathofdev/react-tag-input";
import { RootState } from '../../redux/reducers'
import '../../styles/WorkerCreateProfile.css'
import ImageUpload from '../ImageUpload';


interface Iprops {
    handleClose(): void,
    modalShow: boolean,
    titleText: string
}

interface Istate {
    user_id: string,
    rate: number,
    about: string,
    location: string;
      services: string[]
}


const WorkerCreateProfile: FC<Iprops> = ({ handleClose, modalShow, titleText }) => {

    const { userId } = useSelector((state: RootState) => state.auth.registerInfo)


    const { workerProfile } = useSelector((state: RootState) => state.profiles)

    const [formData, setFormData] = useState<Istate>({
        user_id: userId,
        rate: 0,
        about: "",
        location: "",
          services: [""]
    })




    const locations = [
        "Egbeda", "Lagos Island", "Igando",
        "Ikeja", "Maryland", "Agege",
        "Abule-egba", "Lekki", "Ajah",
        "Badagry", "Berger",
        "Victoria Island"
    ]




    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(postWorkersProfiles(userId))
    }, [])


    const handleChange = (event: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.value })
    }


    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(titleText, "title")
        if(titleText === "Edit"){
            dispatch(updateWorkerProfile(formData))
        }else{
            dispatch(createWorkerProfile(formData))
        }
      
    }

    const { rate, about, location, services } = formData;


    return (
        <div className="worker-create-profile">
            <Modal
                show={modalShow}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className='create-profile-container'>
                    <div className='create-details'>
                        <h1>{titleText} Profile</h1>

                        <Form onSubmit={handleSubmit} className="form">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Rate ($)</Form.Label>
                                <Form.Control defaultValue={formData.rate} onChange={handleChange} name="rate" required type="number" placeholder="Enter rate" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="location">
                                <Form.Label>Location</Form.Label>
                                <Form.Select onChange={handleChange} name="location" value={location}>
                                    <option>Select Location</option>
                                    {locations.map((location, index) => <option key={index} value={location}>{location}</option>)}
                                </Form.Select>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="about">
                                <Form.Label>About</Form.Label>
                                <FormControl onChange={handleChange} name="about" defaultValue={formData.about} as="textarea" aria-label="With textarea" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="services">
                                <Form.Label>Services</Form.Label>
                                <ReactTagInput
                                    tags={services}
                                    onChange={(newTags) => setFormData({ ...formData, services: newTags })}
                                />
                            </Form.Group>



                            <Button className='form-btn mt-3' variant="primary" type="submit">
                            {titleText} profile
                            </Button>
                        </Form>

                    </div>

                </div>
            </Modal>

        </div>


    )
}

export default WorkerCreateProfile
