import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

class Notes extends React.Component{
  render(){
    return (
      <div>
        <h3> Notes for {this.props.username} </h3> <br />
          <AddNote username={this.props.username} addNote={this.props.addNote} />
          <NotesList notes={this.props.notes} />
      </div>
    )
  }
};

export default Notes;
Notes.propTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
}


module.exports = Notes;
