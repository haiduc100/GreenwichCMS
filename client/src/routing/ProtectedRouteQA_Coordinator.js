import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import QAcoordinator from '../pages/QAcoordinator';

const ProtectedRouteQACoordinator = ({ redirectTo }) => {
    const { authState: { isAuthenticated } } = useContext(AuthContext)
    return (
        <>
            {isAuthenticated ?
                <>
                    <QAcoordinator />
                </>
                :
                <Navigate to={redirectTo} />}
        </>
    )
};

export default ProtectedRouteQACoordinator;