import React,{ Component } from 'react';

class NoteList extends Component {
    render(){
        const { notes } = this.props;
        // console.log("notes:",notes);
        return (
           <ul className="list-group">
               {
                   notes.map((note,index) =>{
                        return <li key={index}>{ note.author }: { note.text } ({ note.date })</li>
                   })
               }
           </ul>
        )
    }
}

export default NoteList;