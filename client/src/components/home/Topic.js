import * as React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './Home.css'

const Topic = () => {
    return (
        <Box className='topic' sx={{ borderRadius: '3px' }}>
            <Grid
                item
                xs={12}
                sx={{
                    height: '150px',
                    backgroundImage: 'url(https://newocean.edu.vn/wp-content/uploads/2015/02/university-of-greenwich.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderBottom: '1px solid #d6d3d3'
                }}
            />
            <Grid container>
                <Grid xs={12}>
                    <Button as={Link} to='/postIdea'>
                        <span>1</span>
                        <KeyboardArrowUpIcon />
                        <span>alo anh hoang</span>
                    </Button>
                </Grid>
                <Grid xs={12}>
                    <Button>
                        <span>2</span>
                        <KeyboardArrowUpIcon />
                        <span>alo anh hoang</span>
                    </Button>
                </Grid>
                <Grid xs={12}>
                    <Button>
                        <span>3</span>
                        <KeyboardArrowUpIcon />
                        <span>alo anh hoang</span>
                    </Button>
                </Grid>
                <Grid xs={12}>
                    <Button>
                        <span>4</span>
                        <KeyboardArrowUpIcon />
                        <span>alo anh hoang</span>
                    </Button>
                </Grid>
                <Grid xs={12}>
                    <Button>
                        <span>5</span>
                        <KeyboardArrowUpIcon />
                        <span>alo anh hoang</span>
                    </Button>
                </Grid>
                <Button sx={{ margin: ' 10px auto' }} variant="contained">View All</Button>
            </Grid>
        </Box>
    );
};

export default Topic;