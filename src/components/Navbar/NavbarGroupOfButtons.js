// React stuff
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BadgeListItem from "./BadgeListItem";

// MUI stuff
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ContactsIcon from "@material-ui/icons/Contacts";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  ...theme.spreadThis
});

const StyledListItem = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    marginTop: 2,
    "& .MuiListItemIcon-root": {
      color: theme.palette.common.white,
      minWidth: 30,
      margin: "4px auto"
    },
    "& .MuiListItemText-primary": {
      color: theme.palette.common.white
    }
  }
}))(ListItem);

// A group of buttons for the navbar
const NavbarGroupOfButtons = ({
  classes,
  invisibleCartBadge,
  invisibleComparisonBadge,
  cartItemsLength,
  comparisonItemsLength
}) => (
  <List className={classes.containerFlexRow}>
    <Link to="/" className={classes.linkTitle} data-cy-page="home">
      <StyledListItem button key={1}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Shop" />
      </StyledListItem>
    </Link>
    <Link to="/cart" className={classes.linkTitle} data-cy-page="cart">
      <StyledListItem button key={2}>
        <BadgeListItem
          invisible={invisibleCartBadge}
          badgeContent={cartItemsLength}
          title="Cart"
          datacy="cart badge"
        >
          <ShoppingCart />
        </BadgeListItem>
      </StyledListItem>
    </Link>
    <Link to="/comparison" className={classes.linkTitle} data-cy-page="comparison">
      <StyledListItem button key={3}>
        <BadgeListItem
          invisible={invisibleComparisonBadge}
          badgeContent={comparisonItemsLength}
          title="Comparison"
          datacy="comparison badge"
        >
          <AssessmentIcon />
        </BadgeListItem>
      </StyledListItem>
    </Link>
    <Link to="/contacts" className={classes.linkTitle} data-cy-page="contacts">
      <StyledListItem button key={4}>
        <ListItemIcon>
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </StyledListItem>
    </Link>
  </List>
);

NavbarGroupOfButtons.propTypes = {
  /**
   * Visibility of the badge tied to the cart page
   */
  invisibleCartBadge: PropTypes.bool.isRequired,
  /**
   * Visibility of the badge tied to the comparison page
   */
  invisibleComparisonBadge: PropTypes.bool.isRequired,
  /**
   * Amount of products in the cart
   */
  cartItemsLength: PropTypes.number.isRequired,
  /**
   * Amount of compared products
   */
  comparisonItemsLength: PropTypes.number.isRequired,
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavbarGroupOfButtons);
