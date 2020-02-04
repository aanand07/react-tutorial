import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { setTimeout } from 'timers';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'app'};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value},
       () => console.log(this.state.value));
    // setTimeout(() => console.log(this.state.value));
  }

  componentDidUpdate(prevProp, prevState){
    // console.log(this.state.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  // this.handleChange
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <select value={this.state.value} onChange={this.handleChange.bind(this)}>
            <option value="app">App</option>
            <option value="web">Web</option>
          </select>
          {/* <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />  */}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true
//     }
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     squares[i] = this.state.xIsNext? 'X' : 'O';
//     this.setState({squares: squares, xIsNext: !this.state.xIsNext});
//   }

//   renderSquare(i) {
//     return (
//       <Square value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)} />
//     )
//   }

//   render() {
//     const status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);


// export default App;
