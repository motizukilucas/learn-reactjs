import React, { Component } from 'react';
import Card from './Card';
import './css/NotesList.css';

class NotesList extends Component {
    render() { return (
        <ul className="notesList">
            {
               this.props.notes.map((note, index) => {
                    return (
                        <li key={index}>
                            <Card title={note.title} content={note.content} />
                        </li>
                    );
                })
            }
        </ul>
    )};
  }
  
export default NotesList;
  