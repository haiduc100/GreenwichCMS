import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IdeaContext } from '../contexts/IdeaContext';

const ReadMore = ({ children, goodIdea }) => {
    const { findIdea } = useContext(IdeaContext)
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
        findIdea(goodIdea.id)
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 63) : text}
            <Button size="small" onClick={toggleReadMore} style={{ color: '#4991df', cursor: 'pointer', textDecoration: 'none' }} as={Link} to="/ideaDetail-home">
                {isReadMore && "...read more"}
            </Button>
        </p>
    );
};

export default ReadMore