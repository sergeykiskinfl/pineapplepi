// React stuff
import React, { Component } from "react";
import PropTypes from "prop-types";
import Product from "../components/Product/Product";
import ProductSkeleton from "../components/Product/ProductSkeleton";

// Redux stuff
import { connect } from "react-redux";
import { getProducts } from "../redux/actions/cartActions";

// MUI stuff
import Grid from "@material-ui/core/Grid";

// Home (Shop) page
class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { loading, products } = this.props;
    
    let productsMarkup = !loading ? (
      products.map(product => (
        <Grid item sm={2} xs={6} style={{ minWidth: 300 }} key={product.id}>
          <Product key={product.id} product={product}/>
        </Grid>
      ))
    ) : (
      <ProductSkeleton />
    );

    return (
      <Grid
        style={{ marginTop: "80px" }}
        container
        spacing={2}
        direction="row"
        justify="center"
      >
        {productsMarkup}
      </Grid>
    );
  }
}

Home.propTypes = {
  /**
   * Get all products from the firestore base
   */
  getProducts: PropTypes.func.isRequired,
  /**
   * Indicates the grid loading
   */
  loading: PropTypes.bool.isRequired,
  /**
   * Array of products
   */
  products: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  products: state.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Home);
