import { Action } from '../actions/imageUpload'
import { ActionType } from '../actionTypes/imageUpload'

interface Image {
    successMsg: string,
    errMsg: string,
    imageUrl: string
}

const initialState = {
    imageUrl: "",
    successMsg: "",
    errMsg: "",
}




const imageUploadReducer = (state: Image = initialState, action: Action) => {

    switch (action.type) {
        case ActionType.UPLOAD_IMAGE:
            return {
                ...state,
                imageUrl: action.payload
            };

        case ActionType.SET_SUCCESS:
            return {
                ...state,
                successMsg: action.payload
            };

        case ActionType.SET_ERROR:
            return {
                ...state,
                errMsg: action.payload
            };
        default:
            return state;

    }
}


export default imageUploadReducer;