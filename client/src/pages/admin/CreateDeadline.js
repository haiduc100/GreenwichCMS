import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SearchIcon from '@mui/icons-material/Search';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';

const CreateDeadline = () => {
    const [deadlineIdea, setDeadLineIead] = React.useState([null, null]);
    const [deadlineComment, setDeadLineComment] = React.useState([null, null]);
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '0 auto 40px' }}>
                <TextField
                    label="Enter discussion topic..."
                    sx={{ width: 400 }}
                />
                <Button >
                    <SearchIcon color="primary" sx={{ fontSize: 40 }} />
                </Button>
            </Box>
            <Grid container>
                <Grid item xs={6} textAlign='center'>
                    <Typography variant="h4" sx={{ margin: '10px auto 30px' }}>
                        Deadline for ideas
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker
                            startText="Check-in"
                            endText="Check-out"
                            value={deadlineIdea}
                            onChange={(newValue) => {
                                setDeadLineIead(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                                <React.Fragment >
                                    <TextField {...startProps} sx={{ margin: 'auto' }} />
                                    <Box sx={{ mt: 2 }}> to </Box>
                                    <TextField {...endProps} sx={{ margin: 'auto' }} />
                                </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6} textAlign='center'>
                    <Typography variant="h4" sx={{ margin: '10px auto 30px' }}>
                        Deadline for comments
                    </Typography>
                    <Grid xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                            <DateRangePicker
                                startText="Check-in"
                                endText="Check-out"
                                value={deadlineComment}
                                onChange={(newValue) => {
                                    setDeadLineComment(newValue);
                                }}
                                renderInput={(startProps, endProps) => (
                                    <React.Fragment>
                                        <TextField {...startProps} sx={{ margin: 'auto' }} />
                                        <Box sx={{ mt: 2 }}> to </Box>
                                        <TextField {...endProps} sx={{ margin: 'auto' }} />
                                    </React.Fragment>
                                )}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                <Grid item xs={12} textAlign='center'>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        minRows={6}
                        placeholder="Enter description for this topic..."
                        style={{ width: '95%', fontSize: 16, marginTop: '30px' }}
                    />
                </Grid>
                <Grid item xs={12} textAlign='center' sx={{ mt: 4 }}>
                    <Button variant="contained" sx={{ fontSize: 16 }}>Create Topic</Button>
                </Grid>
            </Grid>
        </>

    );
};

export default CreateDeadline;