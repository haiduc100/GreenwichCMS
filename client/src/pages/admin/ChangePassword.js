import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AuthContext } from '../../contexts/AuthContext'

import '../home/Home.css'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { authState: { user }, changePassword } = useContext(AuthContext)

    const handelSubmit = async e => {
        e.preventDefault();

        if (confirmPassword !== newPassword) {
            window.alert("Confirm password is incorrect!")
        }
        else {
            const checkChangePassword = await changePassword({
                id: user.userId,
                newPassword: newPassword,
                oldPassword: oldPassword
            })
            console.log(checkChangePassword);

            if (checkChangePassword.status === 200) {
                window.alert("Change Password successfully!")
            }
        }
    }

    return (
        <div>
            <div className="change-password__container" style={{ width: '100%', color: '#ffffff' }}>
                <h1>Change Password</h1>
                <form onSubmit={handelSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Old Password"
                        variant="outlined"
                        name="oldPassword"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                        fullWidth
                        sx={{ mb: 3 }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="New Password"
                        variant="outlined"
                        name="newPassword"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        fullWidth
                        sx={{ mb: 3 }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        fullWidth
                        sx={{ mb: 3 }}
                    />
                    <Button fullWidth variant="contained" sx={{ fontWeight: 'bold', fontSize: '18px' }} type="submit">Save Change</Button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;