import React, { ChangeEvent, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../components/Alert';
import { fetchProfileImage, uploadImageAction } from '../redux/actionCreators/imageUpload';
import { RootState } from '../redux/reducers'
import '../styles/ImageUpload.css'

const ImageUpload = () => {

    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState<any>('');
    const [selectedFile, setSelectedFile] = useState<any>();
    const [modalShow, setModalShow] = useState(false)
    //const [errorMsg,   setErrorMsg] = useState('something went wrong!')

    const dispatch = useDispatch();


    const { successMsg, errMsg, imageUrl } = useSelector((state: RootState) => state.imageUpload)
    const { userId } = useSelector((state: RootState) => state.auth.registerInfo)

    useEffect(() => {

        dispatch(fetchProfileImage(userId))

    }, [])


    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files !== null) {
            const file = e.target.files[0];
            previewFile(file);
            setSelectedFile(file);
            setFileInputState(e.target.value);
        }



    };

    const previewFile = (file: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            console.log('something went wrong!');
        };
    };

    const uploadImage = (base64EncodedImage: any) => {

        dispatch(uploadImageAction(base64EncodedImage))
        setFileInputState('');
        setModalShow(false)
         setPreviewSource('');
    };



    return (
        <div className="image-upload">
           <Alert msg={errMsg} type="danger" />
            <Alert msg={successMsg} type="success" />
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="img-modal"
            >
                <div className="modal-inner">


                <form onSubmit={handleSubmitFile} className="img-form">
                    <input
                        id="fileInput"
                        type="file"
                        name="image"
                        onChange={handleFileInputChange}
                        value={fileInputState}
                        className="form-input"
                    />
                    <button className="btn btn-success" type="submit">
                        Submit
                    </button>
                </form>

                {previewSource && <img className="preview-img" src={previewSource} alt="preview" />}
                                    
                </div>
            </Modal>

            {
                <div className="profile-img-container">
                <img onClick={() => setModalShow(true)}
                className="profile-img"
                    src={imageUrl || "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"}
                    alt="chosen"
                />
                <p className="img-text">Upload image</p>
                </div>
            }
        </div>
    )
}

export default ImageUpload;
