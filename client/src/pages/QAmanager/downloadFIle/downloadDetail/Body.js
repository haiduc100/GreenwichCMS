import React from 'react';
import Grid from '@mui/material/Grid';
import TableDownloadDetail from './TableDownloadDetail';
import { TopicContext } from '../../../../contexts/TopicContext';

import '../../index.css'

const Body = () => {

    const { topicState: { topic } } = React.useContext(TopicContext)

    return (
        <div>
            <Grid container sx={{ width: '90%', margin: '0 auto 10px' }} spacing={3}>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <h4 style={{ fontSize: '40px', margin: '5px 0' }}>{topic.title}</h4>
                </Grid>
                <Grid item xs={12}>
                    <TableDownloadDetail topic={topic} />
                </Grid>
            </Grid>
        </div>
    );
};

export default Body;