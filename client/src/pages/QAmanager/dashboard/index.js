import { useState, useContext, useEffect } from 'react';
import SideBar from '../sideBar';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Idea from '../../../assets/images/idea.png';
import List from '../../../assets/images/list.png';
import Group from '../../../assets/images/group.png';
import Networking from '../../../assets/images/networking.png';
import { IdeaContext } from '../../../contexts/IdeaContext';
import { TopicContext } from '../../../contexts/TopicContext';
import { UserContext } from '../../../contexts/UserContext';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';

import '../index.css'

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const Dashboard = () => {

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const { ideaState: { ideas }, getAllIdea } = useContext(IdeaContext)
    const { topicState: { topics }, getAllTopic } = useContext(TopicContext)
    const { userState: { users }, getAllUsers } = useContext(UserContext)
    useEffect(() => { getAllIdea() }, [])
    useEffect(() => { getAllTopic() }, [])
    useEffect(() => { getAllUsers() }, [])

    return (
        <div>
            <SideBar />
            <Grid container sx={{ width: '90%', margin: '0 auto 10px' }}>
                <Grid container spacing={6} sx={{ marginTop: '1px' }}>
                    <Grid item md={3} xs={6} >
                        <div className="dashboard-statistical">
                            <div className="dashboard-statistical__header">
                                <div className="dashboard-statistical__title1">
                                    Total number of ideas posted
                                </div>
                                <div className="dashboard-statistical__icon">
                                    <img src={Idea} alt="" />
                                </div>
                            </div>
                            <div className="dashboard-statistical__number">{ideas.length}</div>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={6} >
                        <div className="dashboard-statistical">
                            <div className="dashboard-statistical__header">
                                <div className="dashboard-statistical__title1">
                                    Total number of topic created
                                </div>
                                <div className="dashboard-statistical__icon">
                                    <img src={List} alt="" />
                                </div>
                            </div>
                            <div className="dashboard-statistical__number">{topics.length}</div>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={6} >
                        <div className="dashboard-statistical">
                            <div className="dashboard-statistical__header">
                                <div className="dashboard-statistical__title1">
                                    Total number of staff available
                                </div>
                                <div className="dashboard-statistical__icon">
                                    <img src={Group} alt="" />
                                </div>
                            </div>
                            <div className="dashboard-statistical__number">{users.length - 2}</div>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={6} >
                        <div className="dashboard-statistical">
                            <div className="dashboard-statistical__header">
                                <div className="dashboard-statistical__title1">
                                    Total number of departments
                                </div>
                                <div className="dashboard-statistical__icon">
                                    <img src={Networking} alt="" />
                                </div>
                            </div>
                            <div className="dashboard-statistical__number">5</div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ mt: 0.5 }}>
                    <Grid item md={8} xs={12}>
                        <div className="dashboard-statistical__bar-chart1">
                            <div className="bar-chart__title">
                                Number of ideas per department compared to current topic
                            </div>
                            <BarChart />
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div className="dashboard-statistical__pie-chart1">
                            <div className="pie-chart__title">
                                Number of ideas by each department compared to this year
                            </div>
                            <PieChart />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className="dashboard-statistical__line-chart1">
                            <div className="line-chart__filter">
                                <FormControl sx={{ width: '200px', zIndex: '0' }}>
                                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={year}
                                        label="Age"
                                        onChange={e => setYear(e.target.value)}
                                    >
                                        <MenuItem value={2022}>2022</MenuItem>
                                        <MenuItem value={2021}>2021</MenuItem>
                                        <MenuItem value={2020}>2020</MenuItem>
                                        <MenuItem value={2019}>2019</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ width: '200px', zIndex: '0' }}>
                                    <InputLabel id="demo-simple-select-label">Month</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={month}
                                        label="Age"
                                        onChange={e => setMonth(e.target.value)}
                                    >
                                        {months.map(month => {
                                            return <MenuItem key={month} value={month}>{month}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="line-chart__title">
                                Number of ideas by each department compared to the month of each year
                            </div>
                            <LineChart />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;