import { Route, Switch, Redirect } from 'react-router-dom'
import ClientCreateProfile from './screens/client-screens/ClientCreateProfile'
import WorkerCreateProfile from './screens/worker-screen/WorkerCreateProfile'
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'
import Services from './screens/Services'
import { useSelector } from 'react-redux'
import { RootState } from './redux/reducers'
import WorkersProfile from './screens/worker-screen/WorkersProfile'





const Router = () => {

    const { registerInfo } = useSelector((state: RootState) => state.auth)

    return (
        <Switch>
            <Route path='/services' render={(props: any) => <Services {...props} />} />
            
            <Route exact path='/' render={(props: any) => <Home {...props} />} />

            <Route exact path='/register' render={(props: any) => {
                if (!registerInfo.token)
                    return <Register {...props} />
                return <Redirect to="/" />
            }
            }
            />

            <Route exact path='/login' render={(props: any) => {
                if (!registerInfo.token)
                    return <Login {...props} />
                return <Redirect to="/" />

            }
            }
            />
            <Route exact path='/worker-profile' render={(props: any) => {
                if (registerInfo.token)
                    return < WorkersProfile {...props} />
                return <Redirect to="/login" />
            }
            }
            />
            <Route exact path='/client-profile' render={(props: any) => {
                if (registerInfo.token)
                    return < ClientCreateProfile {...props} />
                return <Redirect to="/login" />
            }}
            />
        </Switch>
    )
}

export default Router
