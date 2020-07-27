import React from "react";
import { Link, withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const BootstrapAppBar = withStyles((theme) => ({
  root: {
    background: "#2E3B55",
  },
}))(AppBar);

const BootstrapTab = withStyles((theme) => ({
  root: {
    "&:hover": {
      color: "pink",
    },
  },
}))(Tab);

class NavBar extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    let value = 0;
    switch (this.props.location.pathname) {
      case "/movies":
        value = 1;
        break;
      case "/tictactoe":
        value = 2;
        break;
      default:
        break;
    }
    this.setState({ value });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <BootstrapAppBar position="static">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="site navigation"
          >
            <BootstrapTab label="Home" component={Link} to="/" />
            <BootstrapTab label="Movies" component={Link} to="/movies" />
            <BootstrapTab
              label="Tic Tac Toe"
              component={Link}
              to="/tictactoe"
            />
          </Tabs>
        </BootstrapAppBar>
      </div>
    );
  }
}

export default withRouter(NavBar);
