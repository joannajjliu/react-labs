import React from "react";
import styles from "./tictactoe.module.css";

export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className={styles.square} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
