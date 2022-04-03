import React from 'react';
import SideBar from '../sideBar';
import Grid from '@mui/material/Grid';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BarChart from '../../../assets/images/bar-chart.png';
import PieChart from '../../../assets/images/pie-chart.png';
import LineChart from '../../../assets/images/line-chart.png';
import Idea from '../../../assets/images/idea.png';
import List from '../../../assets/images/list.png';
import Group from '../../../assets/images/group.png';
import Networking from '../../../assets/images/networking.png';

import '../index.css'

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const Dashboard = () => {

    const [year, setYear] = React.useState('');
    const [month, setMonth] = React.useState('');

    return (
        <div>
            <SideBar />
            <Grid container sx={{ width: '90%', margin: '0 auto 10px' }}>
                <Grid container spacing={6} sx={{ mt: '70px' }}>
                    <Grid item xs={3} >
                        <div className="dashboard-statistical">
                            <div className="dashboard-statistical__header">
                                <div className="dashboard-statistical__title">
                                    Total number of ideas posted
                                </div>
                                <div className="dashboard-statistical__icon">
                                    <img src={Idea} alt="" />
                                </div>
                            </div>
                            <div className="dashboard-statistical__number">618</div>
                        </div>
                    </Grid>
                    <Grid item xs={3} >
                        <div className="dashboard-statistical">
                            <div className="dashboard-statistical__header">
                                <div className="dashboard-statistical__title">
                                    Total number of topic created
                                </div>
                                <div className="dashboard-statistical__icon">
                                    <img src={List} alt="" />
                                </div>
                            </div>
                            <div className="dashboard-statistical__number">562</div>
                        </div>
                    </Grid>
                    <Grid item xs={3} >
                        <div className="dashboard-statistical">
                            <div className="dashboard-statistical__header">
                                <div className="dashboard-statistical__title">
                                    Total number of staff available
                                </div>
                                <div className="dashboard-statistical__icon">
                                    <img src={Group} alt="" />
                                </div>
                            </div>
                            <div className="dashboard-statistical__number">200</div>
                        </div>
                    </Grid>
                    <Grid item xs={3} >
                        <div className="dashboard-statistical">
                            <div className="dashboard-statistical__header">
                                <div className="dashboard-statistical__title">
                                    Total number of departments
                                </div>
                                <div className="dashboard-statistical__icon">
                                    <img src={Networking} alt="" />
                                </div>
                            </div>
                            <div className="dashboard-statistical__number">20</div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ mt: 0.5 }}>
                    <Grid item xs={8}>
                        <div className="dashboard-statistical__bar-chart">
                            <div className="bar-chart__title">
                                Number of ideas per department compared to current topic
                            </div>
                            <div className="bar-chart__chart">
                                <img src={BarChart} alt="" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="dashboard-statistical__pie-chart">
                            <div className="pie-chart__title">
                                Number of ideas by each department compared to this year
                            </div>
                            <div className="pie-chart__chart">
                                <img src={PieChart} alt="" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className="dashboard-statistical__line-chart">
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
                            <div className="line-chart__chart">
                                <img src={LineChart} alt="" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;