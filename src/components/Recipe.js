// React stuff
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux stuff
import { connect } from "react-redux";
import { withShipping, withoutShipping } from "../redux/actions/cartActions";

// MUI stuff
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  ...theme.spreadThis,

  container: {
    ...theme.spreadThis.container,
    flexDirection: "column",
    margin: "5px auto",
    padding: 10,
    backgroundColor: "rgba(255,255,255, 0.8)"
  }
});

// Shipping and total
class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.withoutShipping();
  }

  handleChecked = e => {
    if (e.target.checked) {
      this.props.withShipping();
    } else {
      this.props.withoutShipping();
    }
  };

  render() {
    const { classes, total } = this.props;

    return (
      <Box className={classes.container}>
        <Typography variant="h5">
          <input type="checkbox" ref="shipping" onChange={this.handleChecked} data-cy="shipping"/>
          Shipping (+5$)
        </Typography>
        <Typography variant="h5" data-cy="total">Total: {total}</Typography>
        <Button variant="contained" color="secondary">
          Confirm
        </Button>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  total: state.total
});

const mapActionsToProps = {
  withShipping,
  withoutShipping
};

Recipe.propTypes = {
  /**
   * With shipping
   */
  withShipping: PropTypes.func.isRequired,
  /**
   * Without shipping
   */
  withoutShipping: PropTypes.func.isRequired,
  /**
   * Total price
   */
  total: PropTypes.number.isRequired,
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired
  
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Recipe));
