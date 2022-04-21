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
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const CreateAccount = () => {
    const [date, setDate] = React.useState(null);
    const [dateValue, setDateValue] = React.useState(null);
    const { createNewUser } = React.useContext(UserContext)
    const [gen, setGen] = React.useState('male')
    const [role, setRole] = React.useState('Quality Assurance Manager')
    const [department, setDepartment] = React.useState('GCH190102')
    const [userForm, setUserForm] = React.useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
    });
    const { firstName, lastName, userName, password, email } = userForm

    const onchangeUserInfo = e => {
        setUserForm({ ...userForm, gender: gen, role, dateOfBirth: dateValue, department, [e.target.name]: e.target.value });
    }

    const handelChangeDateOfBirth = newValue => {
        setDate(newValue);
        if (newValue.getMonth() < 10) {
            setDateValue(`${newValue.getFullYear()}-0${newValue.getMonth() + 1}-${newValue.getDate()}`)
        }
        else {
            setDateValue(`${newValue.getFullYear()}-${newValue.getMonth()}-${newValue.getDate()}`)
        }
    }

    const handelCreate = async (e) => {
        e.preventDefault();
        const createUser = await createNewUser(userForm)
        if (createUser.status === 200) {
            window.alert("Create new user successfully!")
        }
    }

    return (
        <React.Fragment>
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
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date of birth"
                                variant="standard"
                                value={date}
                                onChange={(newValue) => {
                                    handelChangeDateOfBirth(newValue)
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
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
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            value={email}
                            onChange={onchangeUserInfo}
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <FormControl variant="standard" sx={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-standard-label">Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="department"
                                value={department}
                                onChange={e => setDepartment(e.target.value)}
                                required
                            >
                                <MenuItem value='GCH190102'>GCH190102</MenuItem>
                                <MenuItem value='GCH190103'>GCH190103</MenuItem>
                                <MenuItem value='GCH190104'>GCH190104</MenuItem>
                                <MenuItem value='GCH190106'>GCH190105</MenuItem>
                                <MenuItem value='GCH190107'>GCH190106</MenuItem>
                                <MenuItem value='GCH190108'>GCH190107</MenuItem>
                                <MenuItem value='GCH190109'>GCH190108</MenuItem>
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