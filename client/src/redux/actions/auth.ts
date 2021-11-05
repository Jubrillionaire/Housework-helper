import { ActionType } from "../actionTypes/auth";
import { userInfo } from "../globalInterfaces";

// interface Ilogin {
//     email: string,
//     password: string
// }


interface RegisterAction {
    type: ActionType.REGISTER_USER,
    payload: userInfo
}

interface LoginAction {
    type: ActionType.LOGIN_USER,
    payload: userInfo
}

export type Action = RegisterAction | LoginAction;