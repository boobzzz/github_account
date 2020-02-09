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
        isLoading: false,
        user: {}
    }

    componentDidMount = async () => {
        this.setState({
            isLoading: true
        })

        let data = await fetchGQL(apiSource, query)

        this.setState({
            isLoading: false,
            user: data
        })
    }

    render() {
        let { isLoading, user } = this.state;
        console.log(user);

        return (
            isLoading
            ? <div>Loading...</div>
            : <div>
                <div>
                    <pre style={{background: "grey", color: "white"}}>
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </div>
                <hr/>
                <div>
                    <img src={user.avatarUrl} alt={user.name}/>
                    <h3>{user.name}</h3>
                    <p>{user.bio}</p>
                </div>
            </div>
        )
    }
}
