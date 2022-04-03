import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import QAmanager from '../pages/QAmanager';

const ProtectedRouteQAManager = ({ redirectTo }) => {
    const { authState: { isAuthenticated } } = useContext(AuthContext)
    return (
        <>
            {isAuthenticated ?
                <>
                    <QAmanager />
                </>
                :
                <Navigate to={redirectTo} />}
        </>
    )
}

export default ProtectedRouteQAManager;