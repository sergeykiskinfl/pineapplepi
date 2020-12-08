// React stuff
import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";

// A badge for comparison and cart pages
const BadgeListItem = ({ invisible, badgeContent, title, children, datacy }) => {
  
  return (
    <>
      <Badge
        color="secondary"
        badgeContent={badgeContent}
        invisible={invisible}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        data-cy={datacy}
      >
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={title} />
      </Badge>
    </>
  );
};

BadgeListItem.propTypes = {
 /**
   * Visibility of a badge
   */
  invisible: PropTypes.bool.isRequired,
 /**
  * Amount of selected items
  */
  badgeContent: PropTypes.number,
  /**
   * The navbar item tied to a badge
   */
  title: PropTypes.string 
}

export default BadgeListItem;
