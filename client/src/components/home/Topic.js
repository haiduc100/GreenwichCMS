import * as React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TopicContext } from '../../contexts/TopicContext';

import './Home.css'

const Topic = () => {
    const { topicState: { topics }, getAllTopic, findTopic } = React.useContext(TopicContext)
    React.useEffect(() => getAllTopic(), [])

    const handelChooseTopic = id => {
        findTopic(id)
    }

    return (
        <Box className='topic' sx={{ borderRadius: '3px' }}>
            <Grid
                item
                xs={12}
                sx={{
                    borderBottom: '1px solid #d6d3d3'
                }}
                className="topic-list__image"
            >
                <img src="https://newocean.edu.vn/wp-content/uploads/2015/02/university-of-greenwich.png" alt="" />
            </Grid>
            <Grid container>
                {topics.map((topic, index) => {
                    return (
                        <Grid xs={12} key={topic.ideaCategoryId}>
                            <Button
                                as={Link}
                                to='/postIdea'
                                sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'flex-start' }}
                                onClick={handelChooseTopic.bind(this, topic.ideaCategoryId)}
                            >
                                <span>{index + 1}</span>
                                <KeyboardArrowUpIcon />
                                <span>{topic.title}</span>
                            </Button>
                        </Grid>
                    )
                })}
                <Button sx={{ margin: ' 10px auto' }} variant="contained">View All</Button>
            </Grid>
        </Box>
    );
};

export default Topic;