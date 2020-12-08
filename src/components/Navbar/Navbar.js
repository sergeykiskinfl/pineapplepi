// Redux stuff
import { connect } from "react-redux";

// React stuff
import React from "react";
import PropTypes from "prop-types";
import Pineapple from "../../images/Pineapple.png";
import NavbarDrawerList from "./NavbarDrawerList";
import NavbarGroupOfButtons from "./NavbarGroupOfButtons";
import { Link } from "react-router-dom";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  ...theme.spreadThis,
  navbar: {
    height: 60
  },
  floatRight: {
    float: "right"
  },
  linkBoxLarge: {
    float: "left",
    margin: "15px 0"
  }
});

// Navbar
const Navbar = ({ classes, cartItems, comparisonItems }) => {
  
  let invisibleCartBadge = cartItems.length > 0 ? false : true;

  let invisibleComparisonBadge = comparisonItems.length > 0 ? false : true;

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar>
        <Box className={`${classes.title} ${classes.largeScreenSize}`}>
          <Box className={classes.linkBoxLarge} data-cy="home link">
            <Link to="/" className={classes.linkTitle}>
              <Typography variant="h5">
                <img
                  src={Pineapple}
                  alt="logo"
                  width="24px"
                  height="24px"
                  className={classes.picture}
                />
                Pineapple Pi
              </Typography>
            </Link>
          </Box>

          <Box className={classes.floatRight}>
            <NavbarGroupOfButtons
              invisibleCartBadge={invisibleCartBadge}
              invisibleComparisonBadge={invisibleComparisonBadge}
              cartItemsLength={cartItems.length}
              comparisonItemsLength={comparisonItems.length}
            />
          </Box>
        </Box>

        <Box className={`${classes.title} ${classes.smallScreenSize}`}>
          <NavbarDrawerList
            cartItemsLength={cartItems.length}
            invisibleCartBadge={invisibleCartBadge}
            invisibleComparisonBadge={invisibleComparisonBadge}
            comparisonItemsLength={comparisonItems.length}            
          />
        </Box>
        <Box className={classes.floatRight} data-cy="home link small screen">
          <Link
            to="/"
            className={`${classes.linkTitle} ${classes.smallScreenSize}`}
          >
            <Typography variant="h5">
              <img
                src={Pineapple}
                alt="logo"
                width="24px"
                height="24px"
                className={classes.picture}
              />
              Pineapple Pi
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  /**
   * Array of products in the cart
   */
  cartItems: PropTypes.array.isRequired,
  /**
   * Array of compared products
   */
  comparisonItems: PropTypes.array.isRequired,
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cartItems: state.cartItems,
  comparisonItems: state.comparisonItems
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
