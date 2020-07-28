import React from 'react';
import { doArchiveStory } from '../actions/archive';
import { connect } from 'react-redux';

const Story = ({ story, onArchive }) => {
    const {
        title,
        url,
        author,
        num_comments,
        points,
        objectID
    } = story;
    return (
        <div className='story'>
            <span>
                <a href={url}>{title}</a>
            </span>
            <span>{author}</span>
            <span>{num_comments}</span>
            <span>{points}</span>
            <button onClick={() => { onArchive(objectID) }}>Archive</button>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    onArchive: id => dispatch(doArchiveStory(id)),
})
export default connect(null, mapDispatchToProps)(Story);