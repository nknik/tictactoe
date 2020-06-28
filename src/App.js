import React, { Component } from "react";
import "./App.css";
import "./components/Header.css";

import Status from "./components/Status";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null,
    };
  }

  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];
    this.checkMatch(winLines);
  }

  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let board = this.state.board;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({
          winner: this.state.player,
        });
        setTimeout(() => {
          alert(" MATCH FINISHED WINNER IS " + this.state.winner);
        }, 150);
      }
    }
  }

  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player;
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X",
        });
        this.checkWinner();
      }
    }
  }
  setPlayer(player) {
    this.setState({ player });
  }
  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}{" "}
      </div>
    ));
  }
  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null),
    });
  }
  render() {
    return (
      <center>
        <div className="container">
          <header class="header">
            <h2> Iconic Crew presents</h2>

            <h1>Tic Tac Toe</h1>
            <ul>
              <li>step 1:select player</li>
              <li>step 2:press start</li>
              <li>step 3:press reset</li>
            </ul>
            <div>
              <button
                disabled={!this.state.winner}
                onClick={() => this.reset()}
              >
                {" "}
                Reset
              </button>{" "}
              <button onClick={() => alert("Sorry,under construction!!!")}>
                play with CPU
              </button>
            </div>
          </header>

          <Status
            player={this.state.player}
            setPlayer={(e) => {
              this.setPlayer(e);
            }}
            winner={this.state.winner}
          />
          <div className="board">
            {this.renderBoxes()}
            <br />
          </div>
          <p> happy learning!!!!</p>
          <Footer />
        </div>
      </center>
    );
  }
}

export default App;
