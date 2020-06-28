import React, { Component } from "react";
import "./one.css";

class Player extends Component {
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  render() {
    return (
      <center class='center'>
        <form onSubmit={(e) => this.handleForm(e)}>
          <label>
            Player X
            <input type="radio" name="player" value="X" />
          </label>
          <label>
            Player O
            <input type="radio" name="player" value="O" />
          </label>
          <br />
          <input type="submit" value="Start" />
        </form>
        <br />
      </center>
    );
  }
}

export default Player;
