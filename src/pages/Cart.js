// React stuff
import React from "react";
import PropTypes from "prop-types";
import Product from "../components/Product/Product";
import Recipe from "../components/Recipe";
import PageContentPlaceholder from "../components/PageContentPlaceholder";

// Redux stuff
import { connect } from "react-redux";

// MUI stuff
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  ...theme.spreadThis,

  container: {
    ...theme.spreadThis.container,
    minHeight: 80,
    minWidth: 300,
    margin: "80px auto"
  }
});

// Cart page
const Cart = ({ products, classes }) => {
  
  let cartProducts = products.length ? (
    <Box className={classes.container}>
      <Typography variant="h4">You have ordered:</Typography>

      <Grid
        style={{ marginTop: "5px" }}
        container
        spacing={2}
        direction="row"
        justify="center"
      >
        {products.map(product => (
          <Grid item sm={2} xs={6} style={{ minWidth: 300 }} key={product.id}>
            <Product key={product.id} product={product} inCart={true} />
          </Grid>
        ))}
      </Grid>
      <Recipe />
    </Box>
  ) : (
    <PageContentPlaceholder placeholderContent="Your cart is empty" />
  );

  return <>{cartProducts}</>;
};

const mapStateToProps = state => ({
  products: state.cartItems
});

Cart.propTypes = {
  /**
   * Array of products in the cart
   */
  products: PropTypes.array.isRequired,
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Cart));
