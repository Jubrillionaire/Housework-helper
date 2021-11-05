import { combineReducers } from "redux";
import authReducer from './authReducer';
import imageUploadReducer from "./imageUpload";
import profileReducer from './profileReducer'



const reducers = combineReducers({
    auth: authReducer,
    profiles: profileReducer,
    imageUpload: imageUploadReducer
})

export default reducers


export type RootState = ReturnType<typeof reducers>

