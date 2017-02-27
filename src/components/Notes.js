import React, { Component } from 'react';
import $ from 'jquery';

import NoteList from './NoteList';
import NoteForm from './NoteForm';

class Notes extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes: []
        }
        this.getNotes();
    }
    handleNoteSubmit(note){
        this.setState({
            notes: this.state.notes.concat(note)
        })
    }
    getNotes(){
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.props.url,
            cache: false,
            success: data => {
                console.log("data:",data);
                this.setState({
                    notes: data
                })
            },
            error: ( xhr,status,error ) => {
                console.error(error);
            }
        });
    }
    render(){
        return (
        	<div className="row">
                <h3>用户留言</h3>
                <div className="col-md-12">
                    <NoteList notes ={ this.state.notes }/>
                </div>
                <div className="col-md-12">
                    <NoteForm
                        handleNoteSubmit = { this.handleNoteSubmit.bind(this) }
                    />
                </div>
            </div>
        )
    }
}

export default Notes;