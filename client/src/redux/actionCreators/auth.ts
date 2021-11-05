import { loginInfo, registerInfo } from "../globalInterfaces";
import { Action } from '../actions/auth'
import { Dispatch } from "redux";
import { ActionType } from "../actionTypes/auth";

const registerUser = (info: registerInfo) => async (dispatch: Dispatch<Action>) => {
    
    try {
        const response = await fetch("users/register", {
            method: 'POST',
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(info)
        })

        const data = await response.json();

        const dispatchData = {
            token: data.token,
            fullName: data.full_name,
            userId: data.user_id,
            role: data.role
        }
        if (data.success === true) {
            dispatch({
                type: ActionType.LOGIN_USER,
                payload: dispatchData
            })
            localStorage.setItem("user_data", JSON.stringify(dispatchData))
        }
return data.role
    } catch (err) {
        console.log(err)
    }
}

const loginUser = (info: loginInfo) => async (dispatch: Dispatch<Action>) => {
  
    try {
        const response = await fetch("users/login", {
            method: 'POST',
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(info)
        })

        const data = await response.json();

        const dispatchData = {
            token: data.token,
            fullName: data.full_name,
            userId: data.user_id,
            role: data.role
        }
     
            dispatch({
                type: ActionType.REGISTER_USER,
                payload: dispatchData
            })
        localStorage.setItem("user_data", JSON.stringify(dispatchData))
        

    } catch (err) {
        console.log(err)
    }
}





export { registerUser, loginUser }