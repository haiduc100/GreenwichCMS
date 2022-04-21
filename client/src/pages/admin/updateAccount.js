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
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const UpdateAccount = () => {
    const [date, setDate] = React.useState(null);
    const [dateValue, setDateValue] = React.useState(null);
    const { userState: { user }, updateUser } = React.useContext(UserContext)
    const [userFormUpdate, setUserFormUpdate] = React.useState(user);
    const [gen, setGen] = React.useState(userFormUpdate.gender)
    const [role, setRole] = React.useState(userFormUpdate.role)
    const { firstName, lastName } = userFormUpdate
    const handelChangeDateOfBirth = newValue => {
        setDate(newValue);
        if (newValue.getMonth() < 10) {
            setDateValue(`${newValue.getFullYear()}-0${newValue.getMonth() + 1}-${newValue.getDate()}`)
        }
        else {
            setDateValue(`${newValue.getFullYear()}-${newValue.getMonth() + 1}-${newValue.getDate()}`)
        }
    }

    const onchangeUserInfoUpdate = e => {
        setUserFormUpdate({ ...userFormUpdate, [e.target.name]: e.target.value });
    }

    const handelUpdate = async (e) => {
        e.preventDefault();
        const updateAccount = await updateUser({ ...userFormUpdate, gender: gen, role, dateOfBirth: dateValue });

        if (updateAccount.status === 200) {
            window.alert(`Update info of ${user.firstName + user.lastName} successfully!`)
        }
        else if (updateAccount.status === 400) {
            window.alert(`Please fill in the full information!`)
        }
    }

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>
                Update account
            </Typography>
            <form action="" onSubmit={handelUpdate} >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            value={firstName}
                            onChange={onchangeUserInfoUpdate}
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
                            onChange={onchangeUserInfoUpdate}
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
                                onChange={e => setGen(e.target.value)}
                                value={gen}
                                required
                            >
                                <MenuItem value='male'>Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                                <MenuItem value='other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* <Grid item xs={12} sm={6} >
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
                                <MenuItem value='Quality Assurance Manager'>Quality Assurance Manager</MenuItem>
                                <MenuItem value='Quality Assurance Coordinator'>Quality Assurance Coordinator</MenuItem>
                                <MenuItem value='Staff'>Staff</MenuItem>
                                <MenuItem value='Admin'>Admin</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid> */}
                    <Grid item xs={12} sm={6} >
                        <FormControl variant="standard" sx={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Role"
                                required
                                onChange={e => setRole(e.target.value)}
                                value={role}
                            >
                                <MenuItem value='Quality Assurance Manager'>Quality Assurance Manager</MenuItem>
                                <MenuItem value='Quality Assurance Coordinator'>Quality Assurance Coordinator</MenuItem>
                                <MenuItem value='Staff'>Staff</MenuItem>
                                <MenuItem value='Admin'>Admin</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Button type="submit" variant="contained">Update</Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
};

export default UpdateAccount;