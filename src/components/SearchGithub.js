import React,{ Component,PropTypes } from 'react';

class SearchGithub extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit( event ){
        const  _username = this.username.value;
        this.username.value = '';
        const path = `/profile/${_username}`;
        this.context.router.push(path);
    }
    
    render() {
        return (
            <div  style={{marginTop:'30px'}}>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref={ ref => { this.username = ref;}}/>
                    </div>
                    <div className="form-group col-sm-4">
                        <button type="submit" className="btn btn-block btn-primary">搜索 Github</button>
                    </div>
                </form>
            </div>
        )
    }
}

SearchGithub.contextTypes = {
    router: PropTypes.object
}

export default SearchGithub;