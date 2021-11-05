import { Dispatch } from "redux";
import {Action} from '../actions/profile'
import { ActionType } from "../actionTypes/profile";
import { workerProfile } from "../globalInterfaces";

const storageData = JSON.parse(localStorage.getItem("user_data") || "{}")


export const postWorkersProfiles = (userId: string) => async (dispatch: Dispatch<Action>) => {
    
    try{
              
        const response = await fetch(`profiles/worker/${userId}`, {
            headers:{
                "Content-type": "application/json",
                Authorization: storageData.token
            }
        })
        const data = await response.json();
        
            dispatch({
                type: ActionType.POST_PROFILE,
                payload: data.profile  
            })
    }catch(error){
        console.log(error)
    }
}



export const createWorkerProfile = (workerInfo: workerProfile) => async (dispatch: Dispatch<Action>) => {
    
    try{
              
        const response = await fetch(`profiles/create-worker-profile`, {
            method: "POST",
            headers:{
                "Content-type": "application/json",
                Authorization: storageData.token
            },
            body:JSON.stringify(workerInfo)
        })
        const data = await response.json();
        console.log(data, "success!!!")
    }catch(error){
        console.log(error)
    }
}

export const updateWorkerProfile = (workerInfo: workerProfile) => async (dispatch: Dispatch<Action>) => {
    
    try{
              
        const response = await fetch(`profiles/update-worker-profile`, {
            method: "PATCH",
            headers:{
                "Content-type": "application/json",
                Authorization: storageData.token
            },
            body:JSON.stringify(workerInfo)
        })
        const data = await response.json();

        dispatch({
            type: ActionType.POST_PROFILE,
            payload: data.profile
        })

        console.log(data.profile, "successully updated profile!!!")
    }catch(error){
        console.log(error)
    }
}




export const getWorkerProfile = (id: string) => async (dispatch: Dispatch<Action>) => {
    
    try{
              
        const response = await fetch(`profiles/worker/${id}`, {
            headers:{
                "Content-type": "application/json",
                Authorization: storageData.token
            },
        
        })
        const data = await response.json();
        dispatch({
           type: ActionType.POST_PROFILE,
           payload: data.profile
        })

    }catch(error){
        console.log(error)
    }
}


