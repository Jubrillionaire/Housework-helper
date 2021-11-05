import {ActionType} from '../actionTypes/profile'
import {workerProfile} from '../globalInterfaces'

interface WORKER_PROFILE_ACTION {
  type: ActionType.POST_PROFILE,
  payload: workerProfile
}


export type Action = WORKER_PROFILE_ACTION;