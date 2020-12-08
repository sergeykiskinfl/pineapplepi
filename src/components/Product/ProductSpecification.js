// React stuff
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ProductSpecificationSkeleton from "./ProductSpecificationSkeleton";
import GroupOfFabs from "./GroupOfFabs";

// Redux stuff
import { connect } from "react-redux";
import { getProduct } from "../../redux/actions/cartActions";

// MUI stuff
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  ...theme.spreadThis,

  card: {
    ...theme.spreadThis.card,
    marginTop: 65,
    marginBottom: 0,
    minWidth: 430,
    padding: 10
  },

  container: {
    ...theme.spreadThis.container,
    margin: "30px auto"
  },

  "@media screen and (max-width: 700px), handheld": {
    card: {
      ...theme.spreadThis.card,
      marginTop: 70,
      marginBottom: 0,
      minWidth: 200,
      maxWidth: 300,
      padding: 5
    },

    container: {
      ...theme.spreadThis.container,
      minHeight: 450,
      minWidth: 200,
      maxWidth: 350,
      margin: "15px auto"
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

// A full product description
class ProductSpecification extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getProduct(id);
    this.setState({ id: id });
  }

  render() {
    const { classes, highlightedProduct } = this.props;

    let markupSpecification, markup;

    if (highlightedProduct) {
      const { name, price, imageUrl, specification } = highlightedProduct;

      markupSpecification = Object.keys(specification)
        .sort()
        .map((itemKey, index) => {
          let item = specification[itemKey];

          if (Array.isArray(item)) {
            let itemValues = item.map((value, index) => (
              <Fragment key={index}>
                {value} <br />
              </Fragment>
            ));

            return (
              <Grid container direction="row" key={index}>
                <Grid item xs={4}>
                  <Typography variant="body1">{itemKey}</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1">{itemValues}</Typography>
                </Grid>
              </Grid>
            );
          } else {
            return (
              <Grid container direction="row" key={index}>
                <Grid item xs={4}>
                  <Typography variant="body1">{itemKey}</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1">{item}</Typography>
                </Grid>
              </Grid>
            );
          }
        });

      markup = (
        <Card className={classes.card}>
          <CardHeader title={name} titleTypographyProps={{ variant: "h6" }} />
          <CardMedia
            image={imageUrl}
            className={classes.cardImageSpecification}
          />
          <CardContent className={classes.cardContent}>
            <Grid container direction="column">
              {markupSpecification}
            </Grid>

            <Typography variant="h5" className={classes.price}>
              Price: {price}$
            </Typography>
          </CardContent>
          <GroupOfFabs id={this.state.id} />
        </Card>
      );
    } else {
      markup = <ProductSpecificationSkeleton />;
    }

    return <Box className={classes.container}>{markup}</Box>;
  }
}

const mapStateToProps = state => ({
  highlightedProduct: state.highlightedProduct
});

ProductSpecification.propTypes = {
  /**
   * The selected item
   */
  highlightedProduct: PropTypes.object,
  /**
   * Get the item from the firestore base
   */
  getProduct: PropTypes.func.isRequired,
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getProduct })(
  withStyles(styles)(ProductSpecification)
);
