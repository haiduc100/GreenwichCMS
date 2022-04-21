import * as React from 'react';
import { IdeaContext } from '../../../../contexts/IdeaContext';
import { TopicContext } from '../../../../contexts/TopicContext';

const ListIdea = () => {
    const { ideaState: { ideas } } = React.useContext(IdeaContext)
    const { topicState: { topic } } = React.useContext(TopicContext)

    return (
        <div>
            <div className="list-idea__title">
                {topic === null
                    ?
                    <h1>Topic</h1>
                    :
                    <h1>{topic.title}</h1>
                }
            </div>
            {ideas.length > 0
                ?
                <ul>
                    {ideas.map(idea => {
                        return (
                            <li key={idea.id}>
                                <div className="idea-item__name">
                                    Vũ Hoàng Hà
                                </div>
                                <div className="idea-item__content">
                                    {idea.content}
                                </div>
                                <div className="idea-item__date">
                                    28-3-2000
                                </div>
                            </li>
                        )
                    })}
                </ul>
                :
                <ul>
                    <li>
                        <div className="idea-item__name">
                            User's name
                        </div>
                        <div className="idea-item__content" style={{ textAlign: 'center' }}>
                            Idea's content
                        </div>
                        <div className="idea-item__date">
                            Initiated date
                        </div>
                    </li>
                </ul>
            }
        </div>
    )
}

export default ListIdea;