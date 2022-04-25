import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { UserContext } from '../../contexts/UserContext';
import UpdateAccount from './updateAccount';
import Pagination from '../../components/Pagination';

const ViewAllAccount = () => {
    const [edit, setEdit] = React.useState(false)
    const [search, setSearch] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const [userPerPage] = React.useState(5);
    const { userState: { users }, getAllUsers, findUser, deleteUser, searchUser } = React.useContext(UserContext);
    React.useEffect(() => getAllUsers(), [])

    const chooseUser = userId => {
        findUser(userId)
        setEdit(true)
    }

    const handelDeleteUser = userId => {
        let choice = window.confirm("Do you want to delete this account user?")
        if (choice === true) {
            deleteUser(userId)
        }
    }

    const handelsearch = async () => {

        const test = users.find(user => user.firstName + " " + user.lastName === search)

        if (test !== undefined) {
            await searchUser(test.userId)
        }
        else {
            window.alert(`this user does't exists!`)
        }
    }

    // get current users
    const newUsers = users.sort((a, b) => {
        if (a.role > b.role)
            return -1;
        if (a.role < b.role)
            return 1;
        return 0;
    })
    const indexOfLastUser = currentPage * userPerPage
    const indexOfFirstUser = indexOfLastUser - userPerPage
    const currentUsers = newUsers.slice(indexOfFirstUser, indexOfLastUser)

    // change pagination
    const paginate = number => {
        setCurrentPage(number)
    }

    return (
        <>
            {!edit
                ?
                <React.Fragment sx={{ width: '100%' }}>
                    <Box className="admin-search-user" sx={{ display: 'flex', alignItems: 'center', margin: '0 auto 20px' }}>
                        <TextField
                            label="Enter name of staff..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            sx={{ width: 400, backgroundColor: '#f5f5f5' }}
                        />
                        <Button onClick={handelsearch} sx={{ backgroundColor: '#f5f5f5' }}>
                            <SearchIcon color="action" sx={{ fontSize: 40 }} />
                        </Button>
                    </Box>
                    <Table size="larger" sx={{ minWidth: 900, marginTop: '30px' }}>
                        <TableHead >
                            <TableRow >
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Gender</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Email</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>date Of Birth</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Department</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Role</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentUsers.map((user, index) => {
                                const dateOfBirth = user.dateOfBirth.split("T")
                                return (
                                    <TableRow key={user.userId}>
                                        <TableCell align="center">{user.firstName} {user.lastName}</TableCell>
                                        <TableCell align="center">{user.gender}</TableCell>
                                        <TableCell align="center">{user.email}</TableCell>
                                        <TableCell align="center">{dateOfBirth[0]}</TableCell>
                                        <TableCell align="center">
                                            {
                                                user.department === null ? "Manager" : user.department
                                            }
                                        </TableCell>
                                        <TableCell align="center">{user.role}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                onClick={chooseUser.bind(this, user.userId)}
                                            >
                                                <EditOutlinedIcon sx={{ color: '#933fbae3' }} />
                                            </Button>
                                            <Button
                                                onClick={handelDeleteUser.bind(this, user.userId)}
                                            >
                                                <DeleteOutlineIcon sx={{ color: '#ff4b00de' }} />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    {users.length / userPerPage <= 1
                        ? null
                        : <Pagination perPage={userPerPage} total={users.length} paginate={paginate} />
                    }
                </React.Fragment >
                : <UpdateAccount setEdit={setEdit} />
            }
        </>
    );
};

export default ViewAllAccount;