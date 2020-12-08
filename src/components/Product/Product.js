// React stuff
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GroupOfFabs from "./GroupOfFabs";

// Redux stuff
import { connect } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity
} from "../../redux/actions/cartActions";

// MUI stuff
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  ...theme.spreadThis,

  cardInCart: {
    ...theme.spreadThis.card,
    minHeight: 580
  }
});

// A product component
class Product extends Component {
  state = {
    quantityCart: this.props.product.quantity
  };

  increaseQuantityCart = id => {
    this.props.increaseQuantity(id);
    const quantity = this.props.product.quantity;
    this.setState({ quantityCart: quantity });
  };

  decreaseQuantityCart = id => {
    this.props.decreaseQuantity(id);
    const quantity = this.props.product.quantity;
    this.setState({ quantityCart: quantity });
  };

  render() {
    const {
      classes,
      product: {
        id,
        name,
        specification: { CPU, GPU, Memory },
        imageUrl,
        price,
        quantity
      },
      inCart,
      inComparison
    } = this.props;

    let description = (
      <>
        {CPU}
        <br />
        {GPU}
        <br />
        {Memory}
        <br />
      </>
    );

    let quantityFrame = quantity && (
      <Box className={classes.containerFlexRow}>
        <Typography variant="h5" className={classes.price}>
          Quantity: {this.state.quantityCart}
        </Typography>
        <Box className={classes.containerFlexColumn}>
          <IconButton
            size="small"
            color="secondary"
            aria-label="increase"
            onClick={() => {
              this.increaseQuantityCart(id);
            }}
            data-cy={`increase ${id}`}
          >
            <KeyboardArrowUpIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="small"
            color="secondary"
            aria-label="decrease"
            onClick={() => {
              this.decreaseQuantityCart(id);
            }}
            data-cy={`decrease ${id}`}
          >
            <KeyboardArrowDownIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    );

    return (
      <Card className={inCart ? classes.cardInCart : classes.card}>
        <CardHeader title={name} titleTypographyProps={{ variant: "h6" }} />
        <CardMedia image={imageUrl} className={classes.cardImage} />
        <CardContent className={classes.cardContent}>
          <Typography variant="body1">{description}</Typography>
          <Typography
            variant="h5"
            className={classes.price}
            component={Link}
            to={`/product/${id}`}
            data-cy={`full decription ${id}`}
          >
            View more...
          </Typography>
          <Typography variant="h5" className={classes.price}>
            Price: {price}$
          </Typography>

          {quantityFrame}
        </CardContent>
        <GroupOfFabs inCart={inCart} inComparison={inComparison} id={id} />
      </Card>
    );
  }
}

const mapActionsToProps = {
  increaseQuantity,
  decreaseQuantity
};

Product.propTypes = {
  /**
   * Increase the item quantity
   */
  increaseQuantity: PropTypes.func.isRequired,
  /**
   * Decrease the item quantity
   */
  decreaseQuantity: PropTypes.func.isRequired,
  /**
   * The selected item
   */
  product: PropTypes.object.isRequired,
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired
};

export default connect(null, mapActionsToProps)(withStyles(styles)(Product));
