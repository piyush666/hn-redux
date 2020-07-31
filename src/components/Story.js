import React from 'react';
import { doArchiveStory } from '../actions/archive';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

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
        <>
            <Card border="secondary" className="mb-1">
                <Card.Body>
                    <Card.Text>
                        <Card.Link href={url}>{title}</Card.Link><br />
                        <small>
                            {points} points by {author} | {num_comments} comments
                            <sub>
                                <a href='/'><i onClick={(e) => { e.preventDefault(); onArchive(objectID) }} className="material-icons"> archive </i></a>
                            </sub>
                        </small>

                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
const mapDispatchToProps = dispatch => ({
    onArchive: id => dispatch(doArchiveStory(id)),
})
export default connect(null, mapDispatchToProps)(Story);

