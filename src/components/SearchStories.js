import React, { Component } from 'react';
import { doFetchStories } from '../actions/story';
import { connect } from 'react-redux';

const applyQueryState = query => ({
    query
})
class SearchStories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        const { value } = event.target;
        this.setState(applyQueryState(value))
        console.log(this.state.query);
    }
    onSubmit(event) {
        const { query } = { ...this.state };
        console.log(`on submit: ${query}`);
        if (query) {
            this.props.onFetchStories(query);
            this.setState(applyQueryState(''));
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    value={this.state.query}
                    onChange={this.onChange}
                />
                <button type='submit'>Search</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onFetchStories: query => dispatch(doFetchStories(query)),
});
export default connect(null, mapDispatchToProps)(SearchStories);