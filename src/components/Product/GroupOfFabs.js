// React stuff
import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";

// Redux stuff
import { connect } from "react-redux";
import {
  setCartItem,
  removeCartItem,
  setComparisonItem,
  removeComparisonItem,
} from "../../redux/actions/cartActions";

const styles = (theme) => ({
  ...theme.spreadThis,
  container: {
    ...theme.spreadThis.container,
    width: "100%",
  },
});

const GroupOfFabs = ({
  classes,
  inCart,
  inComparison,
  id,
  removeCartItem,
  removeComparisonItem,
  setCartItem,
  setComparisonItem,
}) => {
  const handleCartClick = (id, inCart) => {
    inCart ? removeCartItem(id) : setCartItem(id);
  };

  const handleComparisonClick = (id, inComparison) => {
    inComparison ? removeComparisonItem(id) : setComparisonItem(id);
  };

  let cartPicture = inCart ? (
    <RemoveShoppingCartIcon />
  ) : (
    <AddShoppingCartIcon />
  );

  let comparisonPicture = inComparison ? <DeleteIcon /> : <AssessmentIcon />;

  return (
    <Box>
      <Tooltip title={inCart ? "Remove" : "Buy"} placement="bottom">
        <Fab
          data-cy-cart={id}
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.fab}
          onClick={() => {
            handleCartClick(id, inCart);
          }}
        >
          {cartPicture}
        </Fab>
      </Tooltip>
      <Tooltip
        title={inComparison ? "Remove" : "Compare"}
        placement="bottom"
        style={{ float: "right" }}
      >
        <Fab
          data-cy-comparison={id}
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.fab}
          onClick={() => {
            handleComparisonClick(id, inComparison);
          }}
        >
          {comparisonPicture}
        </Fab>
      </Tooltip>
    </Box>
  );
};

const mapActionsToProps = {
  setCartItem,
  removeCartItem,
  setComparisonItem,
  removeComparisonItem,
};

GroupOfFabs.propTypes = {
  /**
   * An item id
   */
  id: PropTypes.string.isRequired,
  /**
   * Whether an item in the cart
   */
  inCart: PropTypes.bool,
  /**
   * Whether an item in the comparison
   */
  inComparison: PropTypes.bool,
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired,
  /**
   * Set an item in the cart
   */
  setCartItem: PropTypes.func.isRequired,
  /**
   * Remove an item from the cart
   */
  removeCartItem: PropTypes.func.isRequired,
  /**
   * Set an item in the comparison
   */
  setComparisonItem: PropTypes.func.isRequired,
  /**
   * Remove an item from the comparison
   */
  removeComparisonItem: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapActionsToProps
)(withStyles(styles)(GroupOfFabs));
