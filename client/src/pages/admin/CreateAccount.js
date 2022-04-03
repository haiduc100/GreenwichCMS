import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { UserContext } from '../../contexts/UserContext';
import SuccessAlert from '../../components/alert/SuccessAlert'
import { Navigate } from 'react-router-dom';

const CreateAccount = () => {
    const { createNewUser } = React.useContext(UserContext)
    const [gen, setGen] = React.useState('male')
    const [role, setRole] = React.useState('Quality Assurance Manager')
    const [showAler, setShowAler] = React.useState(false)
    const [staffForm, setStaffForm] = React.useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        userName: '',
        password: '',
    });
    const { firstName, lastName, dateOfBirth, userName, password } = staffForm

    const onchangeUserInfo = e => {
        setStaffForm({ ...staffForm, gender: gen, role: role, [e.target.name]: e.target.value });
    }

    const handelCreate = async (e) => {
        e.preventDefault();
        await createNewUser(staffForm)
        setShowAler(true)
        setTimeout(() => {
            setShowAler(false)
        }, 3000)

    }

    <Navigate to="/admin/viewAll" />

    return (
        <React.Fragment>
            {showAler ?
                <SuccessAlert />
                : null
            }
            <Typography variant="h4" gutterBottom>
                Create new account
            </Typography>
            <form action="" onSubmit={handelCreate} >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            value={firstName}
                            onChange={onchangeUserInfo}
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            value={lastName}
                            onChange={onchangeUserInfo}
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField
                            required
                            id="dateOfBirth"
                            name="dateOfBirth"
                            label="Date Of Birth"
                            value={dateOfBirth}
                            onChange={onchangeUserInfo}
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <FormControl variant="standard" sx={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="gender"
                                value={gen}
                                onChange={e => setGen(e.target.value)}
                                required
                            >
                                <MenuItem value='male'>Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                                <MenuItem value='other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <FormControl variant="standard" sx={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-standard-label">Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="department"
                                required
                            >
                                <MenuItem value='Quality Assurance Manager'>Quality Assurance Manager</MenuItem>
                                <MenuItem value='Quality Assurance Coordinator'>Quality Assurance Coordinator</MenuItem>
                                <MenuItem value='Staff'>Staff</MenuItem>
                                <MenuItem value='Admin'>Admin</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <FormControl variant="standard" sx={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Role"
                                required
                                onChange={e => {
                                    setRole(e.target.value)
                                }}
                                value={role}
                            >
                                <MenuItem value='Quality Assurance Manager'>Quality Assurance Manager</MenuItem>
                                <MenuItem value='Quality Assurance Coordinator'>Quality Assurance Coordinator</MenuItem>
                                <MenuItem value='Staff'>Staff</MenuItem>
                                <MenuItem value='Admin'>Admin</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField
                            required
                            id="userName"
                            name="userName"
                            label="User Name"
                            value={userName}
                            onChange={onchangeUserInfo}
                            fullWidth
                            autoComplete="shipping address-line2"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            value={password}
                            onChange={onchangeUserInfo}
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Button type="submit" variant="contained">Create</Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
};

export default CreateAccount;