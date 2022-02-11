import React, { Component } from 'react';

class Form extends Component {
    // constructor (props){
    //   super(props);
    // }

    handle(event) {  
      event.preventDefault();
      this.props.newNote(event.target.title.value, event.target.content.value);
    }

    render() { return (
      <form onSubmit={this.handle.bind(this)}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Content" />
        <button type="submit">Submit</button>
      </form>
    )};
  }
  
export default Form;
  

// function Form() {
//     function constructor(props) {
//       super(props);
//     }  

//     function handle(event) {  
//       event.preventDefault();
//       this.props.newNote(event.target.title.value, event.target.content.value)
//       // console.log(event.target.title.value);
//     }

//     return (
//       <form onSubmit={handle.bind(this)}>
//         <input name="title" placeholder="Title" />
//         <textarea name="content" placeholder="Content" />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
  
// export default Form;
  