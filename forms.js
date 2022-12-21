import { useState } from 'react';
import ReactDOM from 'react-dom/client';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Roll Number:
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <br/>
         <label>
          Image:
          <input type="file" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <br/>
         <label>
          Text Area:
          <textarea value={this.state.value} onChange={this.handleChange} />
       </label>
       <br/>
       <br/>
       <input type="submit" value="Submit" />
     </form>
   );
 }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm />);
