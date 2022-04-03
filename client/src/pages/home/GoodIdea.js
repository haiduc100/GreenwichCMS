import React from 'react';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import { Navigate } from 'react-router-dom';
import './Home.css'
const GoodIdea = () => {

    return (
        <div className="good-idea" >
            <div className="good-idea__avatar">
                <img src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg" alt="" />
            </div>
            <div className="good-idea__name">
                Vũ Hoàng Hà
            </div>
            <div className="good-idea__title">
                đốt trường
            </div>
            <div className="good-idea__detail">
                i don't know, but i love you so much,
                i don't know, but i love you so much,
                i don't know, but i love you so much,
                i don't know, but i love you so much
            </div>
            <div className="good-idea__document">
                <SummarizeOutlinedIcon sx={{ mr: 2 }} />
                <SummarizeOutlinedIcon sx={{ mr: 2 }} />
                <SummarizeOutlinedIcon />
            </div>
            <div className="good-idea__see-more" onClick={() => (<Navigate to='/ideaDetail' />)}>
                See more
            </div>
        </div>
    );
};

export default GoodIdea;