import React, { useEffect } from 'react';
import Stories from './Stories';
import SearchStories from './SearchStories';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import { Container, Row } from 'react-bootstrap';
function App({ fetchStories }) {
  // on app did mount it will fetch stories using saga
  useEffect(() => {
    fetchStories('react');
  })
  return (
    <Container className="mt-2">
      <Row className="justify-content-md-center">
        <h1>Hacker-News Client</h1>
      </Row>
      <Row className="justify-content-md-center">
        <SearchStories />
      </Row>
      <Row className="justify-content-md-center mt-2">
        <Stories />
      </Row>
    </Container>
  );
}
const mapDispatchToProps = dispatch => ({
  fetchStories: query => dispatch(doFetchStories(query))
})
export default connect(null, mapDispatchToProps)(App);