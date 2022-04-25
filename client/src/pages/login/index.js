import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Navigate } from 'react-router-dom';

import './Login.css'

const LoginPage = () => {
    const [viewPassword, setViewPassword] = useState(false);
    const [loginForm, setLoginForm] = useState({
        userName: '',
        password: '',
    });
    const { userName, password } = loginForm;

    const { loginUser, authState: { isAuthenticated, user } } = useContext(AuthContext);

    const onchangeLoginForm = e => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const login = await loginUser(loginForm);

        if (userName === "") {
            window.alert("Usernames can't be empty!")
        }
        else if (password === "") {
            window.alert("password can't be empty!")
        }
        else if (login.status === 401) {
            window.alert("userName or password is incorrect!")
        }

    };

    if (isAuthenticated && user.role === 'Admin') {
        return <Navigate to='/admin' />
    }
    else if (isAuthenticated && user.role === 'Staff') {
        return <Navigate to='/home' />
    }
    else if (isAuthenticated && user.role === 'Quality Assurance Manager') {
        return <Navigate to='/qa-manager' />
    }
    else if (isAuthenticated && user.role === 'Quality Assurance Coordinator') {
        return <Navigate to='/qa-coordinator' />
    }

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 12,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box className="formLogin" component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            value={userName}
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="userName"
                            name="userName"
                            autoComplete="userName"
                            autoFocus
                            onChange={onchangeLoginForm}
                        />
                        <TextField
                            value={password}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={viewPassword ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            onChange={onchangeLoginForm}
                        />
                        {viewPassword
                            ? <RemoveRedEyeOutlinedIcon className="viewPassword" onClick={setViewPassword.bind(this, false)} />
                            : <VisibilityOffOutlinedIcon className="viewPassword" onClick={setViewPassword.bind(this, true)} />
                        }

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://greenwich.edu.vn/wp-content/uploads/2021/05/avata.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </Grid>
    );
};

export default LoginPage;