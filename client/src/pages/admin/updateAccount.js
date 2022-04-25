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

const UpdateAccount = ({ setEdit }) => {
    const [department, setDepartment] = React.useState('GCH190102')
    const { userState: { user }, updateUser } = React.useContext(UserContext)
    const [userFormUpdate, setUserFormUpdate] = React.useState(user);
    const [gen, setGen] = React.useState(userFormUpdate.gender)
    const [role, setRole] = React.useState(userFormUpdate.role)
    const { firstName, lastName, email } = userFormUpdate

    const onchangeUserInfoUpdate = e => {
        setUserFormUpdate({ ...userFormUpdate, [e.target.name]: e.target.value });
    }

    const handelUpdate = async (e) => {
        e.preventDefault();
        const updateAccount = await updateUser({ ...userFormUpdate, gender: gen, role, department });

        if (updateAccount.status === 200) {
            window.alert(`Update info of ${user.firstName + user.lastName} successfully!`)
            setEdit(false)
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
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            value={email}
                            onChange={onchangeUserInfoUpdate}
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                        />
                    </Grid>
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