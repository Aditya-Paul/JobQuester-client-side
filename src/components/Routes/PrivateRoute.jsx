import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    //console.log(location)
    if(loading){
        return  <span className="loading loading-spinner loading-lg"></span>
      }

    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={'/JobQuester/login'} replace></Navigate>
};

export default PrivateRoute;