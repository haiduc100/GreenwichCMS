import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TopicContext } from '../../contexts/TopicContext';

const CreateDeadline = () => {
    const [deadlineTopic, setDeadlineTopic] = React.useState(null);
    const [deadlineTopicValue, setDeadlineTopicValue] = React.useState(null);
    const [deadlineComment, setDeadlineComment] = React.useState(null);
    const [deadlineCommentValue, setDeadlineCommentValue] = React.useState(null);

    const { topicState: { topics, topic }, updateTopic, findTopic, getAllTopic } = React.useContext(TopicContext)
    const [topicTitle, setTopicTitle] = React.useState('');
    React.useEffect(() => getAllTopic(), [])

    const handleChange = (event) => {
        setTopicTitle(event.target.value);
    };

    const handelChangeDeadlineTopic = (newValue) => {
        setDeadlineTopic(newValue)
        if (newValue.getMonth() < 10) {
            setDeadlineTopicValue(`${newValue.getFullYear()}-0${newValue.getMonth() + 1}-${newValue.getDate()}`)
        }
        else {
            setDeadlineTopicValue(`${newValue.getFullYear()}-${newValue.getMonth() + 1}-${newValue.getDate()}`)
        }
        const today = new Date()
        const someDay = new Date()
        someDay.setFullYear(newValue.getFullYear(), newValue.getMonth(), newValue.getDate())
        if (someDay < today) {
            setDeadlineTopic(null)
            window.alert('Deadlines for idea must be bigger than today!')
        }
    }

    const handelChangeDeadlineComment = (newValue) => {
        setDeadlineComment(newValue)
        if (newValue.getMonth() < 10) {
            setDeadlineCommentValue(`${newValue.getFullYear()}-0${newValue.getMonth() + 1}-${newValue.getDate()}`)
        }
        else {
            setDeadlineTopicValue(`${newValue.getFullYear()}-${newValue.getMonth() + 1}-${newValue.getDate()}`)
        }
        const today = new Date()
        const someDay = new Date()
        someDay.setFullYear(newValue.getFullYear(), newValue.getMonth(), newValue.getDate())
        if (someDay < today) {
            setDeadlineComment(null)
            window.alert('Deadlines for comment must be bigger than today!')
        }
    }

    const handleSetDeadline = async (e) => {
        e.preventDefault();
        const deadlineForm = {
            ideaCategoryId: topic.ideaCategoryId,
            title: topicTitle,
            firstClosureDate: deadlineTopicValue,
            finalClosureDate: deadlineCommentValue
        }

        const updateDeadline = await updateTopic(deadlineForm)

        if (updateDeadline.status === 200) {
            window.alert(`Create deadline for ${topicTitle} successfully!`)
        }
    }

    return (
        <>
            <form onSubmit={handleSetDeadline}>
                <Box sx={{ display: 'flex', alignItems: 'center', margin: '0 auto 40px' }}>
                    <Box sx={{ width: { xs: '100%', md: '600px' }, margin: '0 auto' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Topic</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={topicTitle}
                                label="Topic"
                                onChange={e => handleChange(e)}
                            >
                                {topics.map((topic) => {
                                    return (
                                        <MenuItem value={topic.title} onClick={() => findTopic(topic.ideaCategoryId)}>{topic.title}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Grid container>
                    <Grid item md={6} xs={12} textAlign='center'>
                        <Typography variant="h4" sx={{ margin: '10px auto 30px' }}>
                            Deadline for topic
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Deadline topic"
                                variant="standard"
                                value={deadlineTopic}
                                onChange={(newValue) => {
                                    handelChangeDeadlineTopic(newValue)
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign='center'>
                        <Typography variant="h4" sx={{ margin: '10px auto 30px' }}>
                            Deadline for comments
                        </Typography>
                        <Grid xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Deadline comments"
                                    variant="standard"
                                    value={deadlineComment}
                                    onChange={(newValue) => {
                                        handelChangeDeadlineComment(newValue)
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} textAlign='center'>
                        <TextareaAutosize
                            aria-label="empty textarea"
                            minRows={6}
                            placeholder="Enter description for this topic..."
                            style={{ width: '100%', fontSize: 16, marginTop: '30px' }}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign='center' sx={{ mt: 4 }}>
                        <Button variant="contained" sx={{ fontSize: 16 }} type="submit">Create Deadline</Button>
                    </Grid>
                </Grid>
            </form>
        </>

    );
};

export default CreateDeadline;