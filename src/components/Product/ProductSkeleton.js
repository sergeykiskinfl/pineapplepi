// React stuff
import React from "react";
import PropTypes from "prop-types";
import NoImg from "../../images/NoImage.png";

// MUI stuff
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  ...theme.spreadThis
});

// A placeholder for a Product
const ProductSkeleton = ({ classes }) => {
  const content = Array.from({ length: 5 }).map((item, index) => (
    <Grid item sm={2} xs={6} style={{ minWidth: 300 }} key={index}>
      <Card className={classes.card} key={index}>
        <CardContent>
          <div className={classes.titlePlaceholder}></div>
        </CardContent>
        <CardMedia image={NoImg} className={classes.cardImage} />
        <CardContent className={classes.cardContent}>
          <div className={classes.fullLine}></div>
          <div className={classes.fullLine}></div>
          <div className={classes.halfLine}></div>
          <div className={classes.pricePlaceholder}></div>
          <div className={classes.pricePlaceholder}></div>
        </CardContent>
        <Box>
          <Tooltip title="Buy" placement="bottom">
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              className={classes.fab}
            >
              <AddShoppingCartIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Compare" placement="bottom">
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              className={classes.fab}
              style={{ float: "right" }}
            >
              <AssessmentIcon />
            </Fab>
          </Tooltip>
        </Box>
      </Card>
    </Grid>
  ));

  return <>{content}</>;
};

ProductSkeleton.propTypes = {
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductSkeleton);
