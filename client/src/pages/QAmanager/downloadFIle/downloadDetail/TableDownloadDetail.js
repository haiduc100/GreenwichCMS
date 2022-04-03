import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const TableDownloadDetail = () => {
    return (
        <Paper sx={{ width: '100%', maxHeight: '520px', overflow: 'scroll' }}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name of Staff</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }} colSpan={2}>Idea</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell align="center">Hoàng Ka</TableCell>
                        <TableCell align="center">Phát triên công ty bằng cách...</TableCell>
                        <TableCell align="center">
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                        </TableCell>
                        <TableCell align="center">2/1/2022</TableCell>
                        <TableCell align="center">
                            <span>Download CSV</span>
                            <IconButton>
                                <FileDownloadIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">Hoàng Hà</TableCell>
                        <TableCell align="center">Phát triên công ty bằng cách...</TableCell>
                        <TableCell align="center">
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                        </TableCell>
                        <TableCell align="center">6/1/2022</TableCell>
                        <TableCell align="center">
                            <span>Download CSV</span>
                            <IconButton>
                                <FileDownloadIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">Văn Đức</TableCell>
                        <TableCell align="center">Phát triên công ty bằng cách...</TableCell>
                        <TableCell align="center">
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                        </TableCell>
                        <TableCell align="center">16/1/2022</TableCell>
                        <TableCell align="center">
                            <span>Download CSV</span>
                            <IconButton>
                                <FileDownloadIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">Văn Đức</TableCell>
                        <TableCell align="center">Phát triên công ty bằng cách...</TableCell>
                        <TableCell align="center">
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                        </TableCell>
                        <TableCell align="center">16/1/2022</TableCell>
                        <TableCell align="center">
                            <span>Download CSV</span>
                            <IconButton>
                                <FileDownloadIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">Văn Đức</TableCell>
                        <TableCell align="center">Phát triên công ty bằng cách...</TableCell>
                        <TableCell align="center">
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                        </TableCell>
                        <TableCell align="center">16/1/2022</TableCell>
                        <TableCell align="center">
                            <span>Download CSV</span>
                            <IconButton>
                                <FileDownloadIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">Văn Đức</TableCell>
                        <TableCell align="center">Phát triên công ty bằng cách...</TableCell>
                        <TableCell align="center">
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                        </TableCell>
                        <TableCell align="center">16/1/2022</TableCell>
                        <TableCell align="center">
                            <span>Download CSV</span>
                            <IconButton>
                                <FileDownloadIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">Văn Đức</TableCell>
                        <TableCell align="center">Phát triên công ty bằng cách...</TableCell>
                        <TableCell align="center">
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                            <InsertDriveFileOutlinedIcon />
                        </TableCell>
                        <TableCell align="center">16/1/2022</TableCell>
                        <TableCell align="center">
                            <span>Download CSV</span>
                            <IconButton>
                                <FileDownloadIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
};

export default TableDownloadDetail;