import {Action} from '../actions/auth'
import { ActionType } from "../actionTypes/auth";
import { userInfo } from '../globalInterfaces';

const storageData = JSON.parse(localStorage.getItem("user_data") || '{}') 

interface IregInfo {
    registerInfo : userInfo
}

const initialState = {
    registerInfo: {
        token:storageData.token,
        fullName: storageData.fullName,
        userId: storageData.userId,
        role: storageData.role
    } 
}

//type stateType = IregInfo



const authReducer = (state : IregInfo = initialState, action: Action) => {

   switch(action.type){
       case ActionType.REGISTER_USER:
           return{
               ...state,
               registerInfo: action.payload
           };
           case ActionType.LOGIN_USER:
           return{
               ...state,
               registerInfo: action.payload
           };
           default: 
             return state
   }


}


export default authReducer;