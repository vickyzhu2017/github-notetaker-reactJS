import React,{ Component } from 'react';
import SearchGithub from '../components/SearchGithub';

class Main extends Component{
    render() {
        // console.log(this.props.children)
        return (
            <div className="main-container">
                <nav className="navbar navbar-default">
                    <div className="col-sm-7 col-sm-offset-2">
                        <SearchGithub />
                    </div>
                </nav>
                <div className="container">
                    { this.props.children }
                </div>
            </div>
        )
    }
}
export default Main;
