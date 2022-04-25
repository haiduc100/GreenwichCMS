import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IdeaContext } from '../../contexts/IdeaContext';
import { TopicContext } from '../../contexts/TopicContext';

const DetailTopicManager = () => {
    const { ideaState: { ideas }, viewIdeaByCategoryName } = React.useContext(IdeaContext)
    const { topicState: { topic } } = React.useContext(TopicContext)

    React.useEffect(() => { viewIdeaByCategoryName(topic.title) }, [])
    return (
        <div style={{ width: '100%' }}>
            <h1 style={{ margin: '0 auto 20px', textAlign: 'center' }}>Deadline Manager</h1>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name of Staff</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Idea</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Deadline</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ideas.map(idea => {
                        return (
                            <TableRow key={idea.id}>
                                <TableCell align="center">{idea.userName}</TableCell>
                                <TableCell align="center" sx={{ maxWidth: '300px', textAlign: 'justify' }}>{idea.content}</TableCell>
                                <TableCell align="center">2/1/2022</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default DetailTopicManager;