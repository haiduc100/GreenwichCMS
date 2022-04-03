import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

export default function TableDownload() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>Download files of all ideas in this system</caption>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Month</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Time-idea</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Topic</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Download</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell align="center" rowSpan={3}>1</TableCell>
                        <TableCell align="center">1/1 - 10/1</TableCell>
                        <TableCell align="center">ý tưởng phát triển công ty</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">
                            <Button variant="text" as={Link} to='/download-detail'>Detail</Button>
                        </TableCell>
                        <TableCell align="center">Download CSV</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">1/1 - 10/1</TableCell>
                        <TableCell align="center">ý tưởng phát triển công ty</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">
                            <Button variant="text">Detail</Button>
                        </TableCell>
                        <TableCell align="center">Download CSV</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">1/1 - 10/1</TableCell>
                        <TableCell align="center">ý tưởng phát triển công ty</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">
                            <Button variant="text">Detail</Button>
                        </TableCell>
                        <TableCell align="center">Download CSV</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center" rowSpan={3}>2</TableCell>
                        <TableCell align="center">1/2 - 10/2</TableCell>
                        <TableCell align="center">ý tưởng phát triển công ty</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">
                            <Button variant="text">Detail</Button>
                        </TableCell>
                        <TableCell align="center">Download CSV</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">1/2 - 10/2</TableCell>
                        <TableCell align="center">ý tưởng phát triển công ty</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">
                            <Button variant="text">Detail</Button>
                        </TableCell>
                        <TableCell align="center">Download CSV</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">1/2 - 20/2</TableCell>
                        <TableCell align="center">ý tưởng phát triển công ty</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">
                            <Button variant="text">Detail</Button>
                        </TableCell>
                        <TableCell align="center">Download CSV</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center" rowSpan={3}>3</TableCell>
                        <TableCell align="center">1/3 - 30/3</TableCell>
                        <TableCell align="center">ý tưởng phát triển công ty</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">
                            <Button variant="text">Detail</Button>
                        </TableCell>
                        <TableCell align="center">Download CSV</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">3/3 - 30/3</TableCell>
                        <TableCell align="center">ý tưởng phát triển công ty</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">
                            <Button variant="text">Detail</Button>
                        </TableCell>
                        <TableCell align="center">Download CSV</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="center">3/3 - 30/3</TableCell>
                        <TableCell align="center">ý tưởng phát triển công ty</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">
                            <Button variant="text">Detail</Button>
                        </TableCell>
                        <TableCell align="center">Download CSV</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
