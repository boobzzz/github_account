import React, { Component } from 'react';
import fetchGQL from './lib/api.js';

const apiSource = "https://api.github.com/graphql";
const query = `query {
    user(login: "boobzzz") {
        name
        avatarUrl(size: 150)
        bio
    }
}`;

export default class App extends Component {
    state = {
        loading: false,
        data: {}
    }

    componentDidMount = async () => {
        // let { data } = this.state;
        let apiData = await fetchGQL(apiSource, query)
        console.log(apiData);

        this.setState({
            data: apiData
        })
    }

    render() {
        let { data } = this.state;

        return (
            <div>
                <pre>
                    {`User data`}
                </pre>
                <hr/>
                <div>
                    {`User data`}
                </div>
            </div>
        )
    }
}
