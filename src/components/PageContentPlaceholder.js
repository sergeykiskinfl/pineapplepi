// React stuff
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// MUI stuff
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  ...theme.spreadThis,
  container: {
    ...theme.spreadThis.container,
    minHeight: 150,
    margin: "300px auto"
  }
});

// A placeholder for a page
const PageContentPlaceholder = ({ classes, placeholderContent }) => (
  <Box className={classes.container}>
    <Typography
      variant="h3"
      className={`${classes.content} ${classes.largeScreenSize}`}
    >
      {placeholderContent}
    </Typography>
    <Typography
      variant="h4"
      className={`${classes.content} ${classes.smallScreenSize}`}
      align="center"
    >
      {placeholderContent}
    </Typography>
    <Button
      variant="contained"
      color="secondary"
      className={classes.content}
      component={Link}
      to="/"
    >
      Return to shop
    </Button>
  </Box>
);

PageContentPlaceholder.propTypes = {
  /**
   * A placeholder description
   */
  placeholderContent: PropTypes.string.isRequired,
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageContentPlaceholder);
