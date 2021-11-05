import React, { FC, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileImage } from '../../redux/actionCreators/imageUpload'
import { getWorkerProfile } from '../../redux/actionCreators/profiles'
import { RootState } from '../../redux/reducers'
import '../../styles/WorkersProfile.css'
import WorkerCreateProfile from './WorkerCreateProfile'
import { workerProfile as Winterface } from '../../redux/globalInterfaces'
import ImageUpload from '../ImageUpload'



const WorkersProfile = () => {

    const [modalShow, setModalShow] = useState(false);
    const [editProfile, setEditProfile] = useState(false)

    const { workerProfile } = useSelector((state: RootState) => state.profiles)
    const { imageUrl } = useSelector((state: RootState) => state.imageUpload)
    const { registerInfo } = useSelector((state: RootState) => state.auth)
    const [titleText, setTitleText] = useState("Create")

    const handleShow = () => {
        setModalShow(true);
    }

    const handleClose = () => {
        setModalShow(false);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfileImage(registerInfo.userId))
        dispatch(getWorkerProfile(registerInfo.userId))
    }, [])

    const handleEdit = () => {
        setTitleText("Edit")
        handleShow()
    }




    return (
        <div className="workers-profile">
            <h1>Your Profile</h1>

            <div className="profile-details">

                <div className="profile-pic">
                    {/* <img src={imageUrl} alt="profile-pic" />          */}

                    <ImageUpload />

                </div>

                <div className="about">
                    <h2>{registerInfo?.fullName}</h2>
                    <p>Location: {workerProfile?.location}</p>
                    <p>About: {workerProfile?.about}</p>
                    <p>services: {workerProfile?.services?.map((x: string, i) => (
                        <ul key={i}>
                            <li>{x}</li>
                        </ul>
                    )

                    )}</p>

                    <p>Rate: ${workerProfile?.rate}</p>
                    {!workerProfile ? (<Button className="createBtn" variant="primary" onClick={() => { handleShow() }}>
                        Create Profile
                    </Button>) : (<Button className="createBtn" variant="primary" onClick={() => handleEdit()}>
                        Edit Profile
                    </Button>)
                    }

                </div>


            </div>




            {<WorkerCreateProfile titleText={titleText} handleClose={handleClose} modalShow={modalShow} />}
        </div >
    )
}

export default WorkersProfile
