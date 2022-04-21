import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { IdeaContext } from '../../../../contexts/IdeaContext';
import { TopicContext } from '../../../../contexts/TopicContext';
import { saveAs } from "file-saver";

const TableDownloadDetail = () => {
    const { ideaState: { ideas }, viewIdeaByCategoryName, downloadFile } = React.useContext(IdeaContext)
    const { topicState: { topic } } = React.useContext(TopicContext)

    React.useEffect(() => { viewIdeaByCategoryName(topic.title) }, [])

    const downloadFileZip = async id => {
        const file = await downloadFile(id)
        const url = file.slice(61)
        saveAs(
            `https://localhost:5001/FileIdea\\${url}`
        );
    }

    return (
        <Paper sx={{ width: '100%', maxHeight: '520px', overflow: 'scroll' }}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name of Staff</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Idea</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ideas.map(idea => {
                        return (
                            <TableRow key={idea.id}>
                                <TableCell align="center">{idea.userName}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '300px', textAlign: 'justify' }}>{idea.content}</TableCell>
                                <TableCell align="center">2/1/2022</TableCell>
                                <TableCell align="center">
                                    <IconButton size="small" color="primary" onClick={downloadFileZip.bind(this, idea.id)}>
                                        <span>Download</span>
                                        <FileDownloadIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default TableDownloadDetail;