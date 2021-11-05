
import { Dispatch } from "redux";
import {Action} from '../actions/imageUpload'
import { ActionType } from "../actionTypes/imageUpload";

const storageData = JSON.parse(localStorage.getItem("user_data") || '{}') 




export const uploadImageAction = (base64EncodedImage: string) => async (dispatch: Dispatch<Action>) => {

    try {
        const response = await fetch(`http://localhost:5000/api/users/upload-image/${storageData.userId}`, {
            method: 'POST',
            body: JSON.stringify({ image: base64EncodedImage }),
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();        
        console.log(data)
        dispatch({
            type: ActionType.SET_SUCCESS,
            payload: 'Image uploaded successfully'
        })

        dispatch({
            type: ActionType.UPLOAD_IMAGE,
            payload: data.data.image_url
        })


    } catch (err) {
        console.error(err);
        dispatch({
            type: ActionType.SET_ERROR,
            payload: 'Something went wrong!'
        })
    }

}


export const fetchProfileImage = (user_id:string) => async (dispatch: Dispatch<Action>) => {

    try{

        const response = await fetch(`http://localhost:5000/api/users/profile-image/${user_id}`);

        const data = await response.json();        
        console.log(data)

        dispatch({
            type: ActionType.UPLOAD_IMAGE,
            payload: data.data.image_url
        })



    }catch(error){
        console.log(error)
    }

}