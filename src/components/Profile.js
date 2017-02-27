import React, { Component } from 'react';

import Notes from './Notes';
import UserProfile from './UserProfile';
import UserRepos from './UserRepos';
import getGithubInfo from '../utils/getGithubInfo';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            info: {},
            repos: []
        }
    }
    componentDidMount(){
        const { username } = this.props.params;
        this.update(username);
    }
    componentWillReceiveProps(nextProps){
        this.update(nextProps.params.username)
    }
    update(username){
        getGithubInfo(username)
            .then( data => {
                this.setState({
                    info: data.userInfo,
                    repos: data.userRepos
                })
            })
    }
    render(){
        const { username } = this.props.params;
        getGithubInfo( username );
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile 
                        username = { username }
                        info = { this.state.info }
                    />
                </div>
                <div className="col-md-4">
                    <UserRepos 
                        username = { username }
                        repos = { this.state.repos }
                    />
                </div>
                <div className="col-md-4">
                    <Notes/>
                </div>
            </div>
        )
    }
}
export default Profile;


