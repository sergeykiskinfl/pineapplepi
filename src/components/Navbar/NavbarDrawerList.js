// React stuff
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BadgeListItem from "./BadgeListItem";

// MUI stuff
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Divider from "@material-ui/core/Divider";
import ContactsIcon from "@material-ui/icons/Contacts";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  ...theme.spreadThis,

  drawerHeaderTypography: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },

  drawerHeader: {
    textAlign: "center",
  },
});

const StyledDrawerHeader = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      color: theme.palette.common.white,
    },
  },
}))(ListItem);

const StyledDrawerListItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(ListItem);

// A drawer component for the navbar (small screen size and phones)
const NavbarDrawerList = ({
  classes,
  cartItemsLength,
  invisibleCartBadge,
  invisibleComparisonBadge,
  comparisonItemsLength,
}) => {
  let invisibleMenuBadge =
    invisibleCartBadge && invisibleComparisonBadge ? true : false;

  const [drawer, setDrawer] = useState(false);

  const drawerList = (
    <List onClick={() => setDrawer(!drawer)}>
      <StyledDrawerHeader>
        <ListItemText primary="Sections" className={classes.drawerHeader} />
      </StyledDrawerHeader>

      <Divider />
      <Link to="/" className={classes.linkTitle} data-cy-page-drawer="home">
        <StyledDrawerListItem button key={1}>
          <ListItemIcon>
            <HomeIcon className={classes.picture} />
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </StyledDrawerListItem>
      </Link>
      <Link to="/cart" className={classes.linkTitle}>
        <StyledDrawerListItem button key={2} data-cy-page-drawer="cart">
          <BadgeListItem
            invisible={invisibleCartBadge}
            badgeContent={cartItemsLength}
            title="Cart"
            datacy="cart badge small"
          >
            <ShoppingCart className={classes.picture} />
          </BadgeListItem>
        </StyledDrawerListItem>
      </Link>
      <Link to="/comparison" className={classes.linkTitle}>
        <StyledDrawerListItem button key={3} data-cy-page-drawer="comparison">
          <BadgeListItem
            invisible={invisibleComparisonBadge}
            badgeContent={comparisonItemsLength}
            title="Comparison"
            datacy="comparison badge small"
          >
            <AssessmentIcon className={classes.picture} />
          </BadgeListItem>
        </StyledDrawerListItem>
      </Link>
      <Link to="/contacts" className={classes.linkTitle}>
        <StyledDrawerListItem button key={4} data-cy-page-drawer="contacts">
          <ListItemIcon>
            <ContactsIcon className={classes.picture} />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </StyledDrawerListItem>
      </Link>
    </List>
  );

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        data-cy="drawer"
        onClick={() => setDrawer(!drawer)}
        color="inherit"
        className={classes.smallScreenSize}
      >
        <Badge color="secondary" variant="dot" invisible={invisibleMenuBadge}>
          <MenuIcon />
        </Badge>
      </IconButton>
      <Drawer
        open={drawer}
        onClose={() => setDrawer(!drawer)}
        className={classes.smallScreenSize}
        data-cy="drawer list"
      >
        {drawerList}
      </Drawer>
    </>
  );
};

NavbarDrawerList.propTypes = {
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarDrawerList);
