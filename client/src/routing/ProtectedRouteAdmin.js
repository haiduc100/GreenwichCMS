import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import AdminPage from '../pages/admin';

const ProtectedRouteAdmin = ({ redirectTo }) => {
    const { authState: { isAuthenticated } } = useContext(AuthContext)
    // if (authLoading) {
    //     return (
    //         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    //             <CircularProgress />
    //         </Box>
    //     )
    // }
    return (
        <>
            {isAuthenticated ?
                <>
                    <AdminPage />
                </>
                :
                <Navigate to={redirectTo} />}
        </>
    )
}

export default ProtectedRouteAdmin;