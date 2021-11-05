import { Action } from "../actions/profile"
import { ActionType } from "../actionTypes/profile"
import { workerProfile } from "../globalInterfaces"

interface Iprofile {
    workerProfile: workerProfile
}

const initialState = {
    workerProfile: {}
}


const profileReducer = (state: Iprofile = initialState, action: Action) => {
    switch(action.type){
        case ActionType.POST_PROFILE: 
           return {
               ...state,
               workerProfile: action.payload
           };
           default:
               return state
    }
}

export default profileReducer;