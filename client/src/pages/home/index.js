import React from 'react';
import SideBar from './sideBar'
import HomePage from './HomePage'
import PostIdea from './postIdea'
import IdeaDetail from './ideaDetail'

const Home = ({ task }) => {
    return (
        <>
            <SideBar />
            {task === 'postIdea'
                ? <PostIdea />
                : task === 'ideaDetail'
                    ? <IdeaDetail />
                    //     : task === 'deadline'
                    //         ? <CreateDeadline />
                    //         : task === 'changepassword'
                    //             ? <ChangePassword />
                    : <HomePage />
            }
        </>
    );
};

export default Home;