import { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { TopicContext } from '../../../contexts/TopicContext';
import { IdeaContext } from '../../../contexts/IdeaContext';
import { CSVLink } from "react-csv";

export default function TableDownload() {
    const data = []
    const { getAllTopic, topicState: { topics }, deleteTopic, findTopic } = useContext(TopicContext)
    const { getAllIdea, ideaState: { ideas } } = useContext(IdeaContext)
    // const { viewIdeaByCategoryName } = useContext(IdeaContext)
    useEffect(() => { getAllTopic() }, [])
    useEffect(() => { getAllIdea() }, [])

    ideas.forEach(idea => {
        data.push({
            User_name: idea.userName,
            Topic: idea.ideaCategoryName,
            Content: idea.content
        })
    })

    const headers = [
        { label: "User_name", key: "User_name" },
        { label: "Topic", key: "Topic" },
        { label: "Content", key: "Content" }
    ];

    const csvReport = {
        data: data,
        headers: headers,
        filename: 'ideas.csv'
    };

    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <CSVLink
                    {...csvReport}
                    style={{
                        color: '#fff',
                        textDecoration: 'none',
                        backgroundColor: '#7fc247',
                        padding: '10px 30px',
                        borderRadius: '5px'
                    }}
                >
                    DOWNLOAD CSV
                </CSVLink>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>Download files of all ideas in this system</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Time-idea</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Topic</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {topics.map(topic => {
                            const newIdeas = []
                            ideas.map(idea => {
                                if (idea.ideaCategoryName === topic.title) {
                                    newIdeas.push(idea)
                                }
                            })
                            return (
                                <TableRow key={topic.ideaCategoryId}>
                                    <TableCell align="center">{topic.firstClosureDate.slice(0, 10)}</TableCell>
                                    <TableCell align="center">{topic.title}</TableCell>
                                    <TableCell align="center">{newIdeas.length}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="text" onClick={findTopic.bind(this, topic.ideaCategoryId)} as={Link} to='/download-detail'>Detail</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
