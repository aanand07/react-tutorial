import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark, colorsLight } from '../../styles/palette';
import { Wrapper, Title } from '../App/style';
import List from './List';

class NameForm extends React.Component {

  render() {
    return (
      <ThemeProvider theme={colorsLight}>
        <div>
          <Wrapper>
            <Title>Dummy React App using styled-components!</Title>
            <List/>
          </Wrapper>
        </div>
      </ThemeProvider>
      
    );
  }
}

export default NameForm;
  // constructor(props) {
  //   super(props);
  //   this.state = {value: 'app'};

  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({value: event.target.value},
  //      () => console.log(this.state.value));
  //   // setTimeout(() => console.log(this.state.value));
  // }

  // componentDidUpdate(prevProp, prevState){
  //   // console.log(this.state.value);
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }
  // this.handleChange
  

/* <form onSubmit={this.handleSubmit.bind(this)}>
        <GlobalStyles/>
        <label>
          Name:
          <select value={this.state.value} onChange={this.handleChange.bind(this)}>
            <option value="app">App</option>
            <option value="web">Web</option>
            </label>
        <input type="submit" value="Submit" />
      </form> 
      */
          // </select>
          /* <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />  */
        





