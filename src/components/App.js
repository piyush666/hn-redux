import React, { useEffect } from 'react';
import './App.css';
import Stories from './Stories';
import SearchStories from './SearchStories';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
function App({ fetchStories }) {
  // on app did mount it will fetch stories using saga
  useEffect(() => {
    fetchStories('');
  })
  return (
    <div className="App">
      <div>
        <SearchStories />
      </div>
      <Stories />
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  fetchStories: query => dispatch(doFetchStories(query))
})
export default connect(null, mapDispatchToProps)(App);