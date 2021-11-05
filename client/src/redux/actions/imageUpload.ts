import {ActionType} from '../actionTypes/imageUpload'




interface UploadImageAction {
    type: ActionType.UPLOAD_IMAGE,
    payload: string
}


interface SetErrorAction {
    type: ActionType.SET_ERROR,
    payload: string
}

interface  SetSuccessAction {
    type: ActionType.SET_SUCCESS,
    payload: string
}


export type Action = UploadImageAction | SetErrorAction | SetSuccessAction;