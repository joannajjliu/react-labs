import React from "react";
import { Board } from "./Board";
import styles from "./tictactoe.module.css";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      tempHistory: [{ squares: Array(9).fill(null) }],
      xTurn: true,
      moveNumber: 0,
    };
  }

  resetGame() {
    this.setState({
      history: [{ squares: Array(9).fill(null) }],
      tempHistory: [{ squares: Array(9).fill(null) }],
      xTurn: true,
      moveNumber: 0,
    });
  }

  handleClick(i) {
    const tempHistory = this.state.tempHistory;
    const history = this.state.history;
    const moveNumber = this.state.moveNumber;
    const isxTurn = this.state.xTurn;
    let squares;
    if (tempHistory.length !== history.length) {
      squares = [...tempHistory[tempHistory.length - 1].squares]; //shallow copy
      if (squares[i]) {
        return;
      }
      squares[i] = isxTurn ? "X" : "O";
      this.setState({
        history: [...tempHistory, { squares }],
        tempHistory: [...tempHistory, { squares }],
        xTurn: (moveNumber + 1) % 2 === 0 ? true : false,
        moveNumber: moveNumber + 1,
      });
    } else {
      squares = [...history[history.length - 1].squares]; //shallow copy;
      if (squares[i]) {
        return;
      }
      squares[i] = isxTurn ? "X" : "O";
      this.setState({
        history: [...history, { squares }],
        tempHistory: [...history, { squares }],
        xTurn: (moveNumber + 1) % 2 === 0 ? true : false,
        moveNumber: moveNumber + 1,
      });
    }
  }

  returnToMove(i) {
    const historySoFar = this.state.history.slice(0, i + 1);
    this.setState({
      moveNumber: i,
      tempHistory: historySoFar,
      xTurn: i === 0 || i % 2 === 0 ? true : false,
    });
  }

  calculateWinner(squares) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const history = this.state.history;
    const currSquares = history[this.state.moveNumber].squares;
    const winner = this.calculateWinner(currSquares);
    let status;
    if (winner) {
      status = `The winner is ${winner}`;
    } else {
      status = `Next player: ${this.state.xTurn ? "X" : "O"}`;
    }
    return (
      <div className={styles.game}>
        <div className={styles.gameboard}>
          <Board
            squares={currSquares}
            handleClick={winner ? () => {} : (i) => this.handleClick(i)}
            status={status}
          />
        </div>
        <div className={styles.gameinfo}>
          <div>
            <button onClick={() => this.resetGame()}>Reset Game</button>
          </div>
          {history.map((item, index) => {
            return (
              <div key={item.squares}>
                {index !== 0 ? (
                  <button onClick={() => this.returnToMove(index)}>
                    {`Return to move ${index}`}
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
