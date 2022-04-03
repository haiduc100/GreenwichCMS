import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import HomePage from '../pages/home';

const ProtectedRouteAdmin = ({ redirectTo }) => {
    const { authState: { isAuthenticated } } = useContext(AuthContext)
    return (
        <>
            {isAuthenticated ?
                <>
                    <HomePage />
                </>
                :
                <Navigate to={redirectTo} />}
        </>
    )
}

export default ProtectedRouteAdmin;