// React stuff
import React from "react";
import PropTypes from "prop-types";
import NoImg from "../../images/NoImage.png";

// MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";

// A placeholder for a ProductSpecification
const styles = theme => ({
  ...theme.spreadThis,

  card: {
    ...theme.spreadThis.card,
    marginTop: 70,
    minWidth: 500,
    padding: 10
  },

  container: {
    ...theme.spreadThis.container,
    margin: "10px auto"
  },

  cardImageSpecification: {
    ...theme.spreadThis.cardImageSpecification,
    marginLeft: 18,
    width: "90%",
    objectFit: "cover"
  },

  titlePlaceholder: {
    ...theme.spreadThis.titlePlaceholder,
    marginLeft: 3
  },

  "@media screen and (max-width: 700px), handheld": {
    card: {
      ...theme.spreadThis.card,
      marginTop: 70,
      minWidth: 300,
      maxWidth: 400,
      padding: 5
    },

    container: {
      ...theme.spreadThis.container,
      minHeight: 550,
      minWidth: 300,
      maxWidth: 450,
      margin: "20px auto"
    },

    cardImageSpecification: {
      objectFit: "contain",
      margin: "0 auto",
      minWidth: 230,
      maxWidth: 250,
      minHeight: 180,
      maxHeight: 200
    }
  }
});

const ProductSkeleton = ({ classes }) => {
  const fullLinePlaceholder = Array.from({ length: 8 }).map((item, index) => (
    <div className={classes.fullLine} key={index}></div>
  ));

  const content = (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.titlePlaceholder}></div>
      </CardContent>
      <CardMedia image={NoImg} className={classes.cardImageSpecification} />
      <CardContent className={classes.cardContent}>
        {fullLinePlaceholder}
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
  );

  return <>{content}</>;
};

ProductSkeleton.propTypes = {
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductSkeleton);
