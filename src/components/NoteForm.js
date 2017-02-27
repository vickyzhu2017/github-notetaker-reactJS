import React, { Component } from 'react';

class NoteForm extends Component{
    handleNoteSubmit( event ){
        event.preventDefault();
        var author = this.refs.author.value,
            text = this.refs.text.value,
            date = '刚刚';
        this.props.handleNoteSubmit({author,text,date})
    }
    render(){
        return (
            <form onSubmit = { this.handleNoteSubmit.bind(this) }>
                <div className = "form-group">
                    <input type="text" className="fprm-control" name="author"
                           ref="author" defaultValue="姓名"
                    />
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="text"
                         ref="text" defaultValue="留言"     
                    ></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">发表</button>
                </div>
            </form>
        )
    }
}

export { NoteForm as default }