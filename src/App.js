import NotesList from './components/NotesList';
import Form from './components/Form';
import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.notes = [];
    this.state = {};
  }

  newNote(title, content) {
    const newNote = {title, content}
    console.log(title + " " + content);
    this.notes.push(newNote);
    this.setState({
      notes:this.notes
    });
    console.log(this.notes)
  }

  render () { return (
    <section>
      <Form newNote ={this.newNote.bind(this)} />
      <NotesList notes={this.notes} />
    </section>
  )};
}

export default App;
