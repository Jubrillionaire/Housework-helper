export interface userInfo {
    token: string,
    fullName: string,
    userId : string,
    role: string
}


export interface registerInfo {
 full_name: string,
 user_email: string,
 user_password: string,
 admin: boolean,
 role: string
}


export interface loginInfo {
    user_email: string,
    user_password: string,
   }


   export interface workerProfile{
    worker_id?: string,
    user_id?: string,
    rate?: number,
    services?: string[],
    about?: string,
    location?: string
   }

