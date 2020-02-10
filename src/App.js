import React, { Component } from 'react';
import fetchGQL from './lib/api.js';

const query = `query {
    user (login: "boobzzz") {
        name
        avatarUrl(size: 150)
        bio
    }
}`;

export default class App extends Component {
    state = {
        isLoading: false,
        user: {},
    }

    componentDidMount = async () => {
        this.setState({
            isLoading: true
        })

        let data = await fetchGQL(query);

        this.setState({
            isLoading: false,
            user: data.user,
        })
    }

    render() {
        let { isLoading, user } = this.state;

        return (
            isLoading
            ? <div>Loading...</div>
            : <div>
                <div>
                    <pre style={{ background: "grey", color: "white", padding: "10px" }}>
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
