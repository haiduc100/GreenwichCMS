import * as React from 'react';
import TextEditor from './TextEditor'
import ChooseTopic from './ChooseTopic'
import UploadMultiFiles from './uploadFiles'
import RulesModal from './RulesModal';

import '../PostIdea.css'

const CreatePost = () => {

    return (
        <>
            <h2 className='idea-form__title' >Create new Idea</h2>
            <ChooseTopic />
            <TextEditor />
            <UploadMultiFiles />
            <RulesModal />
        </>
    );
};

export default CreatePost;