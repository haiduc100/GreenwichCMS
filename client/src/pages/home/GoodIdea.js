import React from 'react';
import { IdeaContext } from '../../contexts/IdeaContext'
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReadMore from '../../components/ReadMore'

import './Home.css'

const GoodIdea = ({ goodIdea }) => {
    const { findIdea } = React.useContext(IdeaContext)
    return (
        <div
            className="good-idea"
            onClick={findIdea.bind(this, goodIdea.id)}
        >
            <Avatar
                alt="Remy Sharp" src="https://th.bing.com/th/id/R.03e726787c9f981a4954f521a80424af?rik=Ceuu5CZ8AH5Msw&riu=http%3a%2f%2fcreativeartsworkshop.org%2fwp-content%2fuploads%2f2020%2f02%2fblank-profile-picture-973460_960_720-300x300-1-300x300.png&ehk=J%2bDw294HSHRvhlyrl6fvIPVYRvi7ZoffP0BxPNVmtgw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                sx={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                    width: { md: 90, xs: 80 },
                    height: { md: 90, xs: 80 },
                    mr: 0.5,
                    margin: '5px auto 0'
                }}
            />
            <div className="good-idea__name">
                {goodIdea.privacy ? "Anonymous" : goodIdea.userName}
            </div>
            <div className="good-idea__title">
                {goodIdea.ideaCategoryName}
            </div>
            <div className="good-idea__detail">
                <ReadMore goodIdea={goodIdea}>
                    {goodIdea.content}
                </ReadMore>
            </div>
            <div>
                <div className="good-idea__like-count" >
                    <ThumbUpIcon sx={{ fontSize: '20px', marginRight: '5px' }} />
                    <span> {goodIdea.likeCount} likes</span>
                </div>
            </div>
        </div>
    );
};

export default GoodIdea;