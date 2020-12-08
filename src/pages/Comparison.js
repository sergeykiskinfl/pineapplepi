// React stuff
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import PageContentPlaceholder from "../components/PageContentPlaceholder";
import GroupOfFabs from "../components/Product/GroupOfFabs";

// Redux stuff
import { connect } from "react-redux";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  ...theme.spreadThis,

  container: {
    ...theme.spreadThis.container,
    margin: "150px auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  largeTable: {
    marginLeft: "100px",
    backgroundColor: "rgba(255,255,255, 0.9)",
    "& th, td": {
      fontSize: "12pt",
      maxWidth: 200,
    },

    "& tr>:nth-child(even)": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },

  smallTable: {
    marginLeft: "50px",
    backgroundColor: "rgba(255,255,255, 0.9)",
  },

  titleSmallTable: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },

  image: {
    maxWidth: 200,
  },
});

// Comparison page
const Comparison = ({ products, classes }) => {
  let comparisonProducts;

  const checkArray = (item, product) => {
    if (Array.isArray(item)) {
      let itemValues = item.map((value, index) => (
        <Fragment key={index}>
          {value} <br />
        </Fragment>
      ));

      return <td key={product.name}>{itemValues}</td>;
    } else {
      return <td key={product.name}>{item}</td>;
    }
  };

  const tableTemplate = (
    name,
    image,
    specs,
    price,
    fab,
    tableclass,
    titleclass,
    key
  ) => (
    <table key={key} border="1" className={tableclass}>
      <thead>
        <tr>
          <th className={titleclass}>Title</th>
          {name}
        </tr>
        <tr>
          <th>Image</th>
          {image}
        </tr>
      </thead>
      <tbody>
        {specs}
        <tr>
          <td>Price</td>
          {price}
        </tr>
        <tr>
          <td>Buy/Remove</td>
          {fab}
        </tr>
      </tbody>
    </table>
  );

  if (products.length) {
    let mainSpecsLargeTable = products.reduce(
      (p, product, index) => {
        const { name, imageUrl, price } = product;

        p.names.push(<th key={index}>{name}</th>);
        p.images.push(
          <th key={index} style={{ backgroundColor: "rgba(255,255,255, 0.1)" }}>
            <img src={imageUrl} alt="Product" className={classes.image} />
          </th>
        );
        p.prices.push(<td key={index}>{price}$</td>);
        p.fabs.push(
          <td key={index}>
            <GroupOfFabs id={product.id} inComparison={true} />
          </td>
        );
        return p;
      },
      { names: [], images: [], prices: [], fabs: [] }
    );

    let prodSpecsLargeTable = Object.keys(products[0].specification)
      .sort()
      .map((itemKey, index) => {
        let parameterName = <td key={itemKey}>{itemKey}</td>;

        let parameterValues = products.map((product) => {
          let item = product.specification[itemKey];

          return checkArray(item, product);
        });

        return (
          <tr key={index}>
            {parameterName}
            {parameterValues}
          </tr>
        );
      });

    let smallProductTables = products.map((product, index) => {
      const { name, imageUrl, price, specification } = product;

      let titleSmallTable = <th className={classes.titleSmallTable}>{name}</th>;

      let imageSmallTable = (
        <th style={{ backgroundColor: "rgba(255,255,255, 0.1)" }}>
          <img src={imageUrl} alt="Product" className={classes.image} />
        </th>
      );

      let prodSpecsSmallTable = Object.keys(specification)
        .sort()
        .map((specItemKey, index) => {
          let specItem = product.specification[specItemKey];

          let specItemValue = checkArray(specItem, product);

          return (
            <tr key={index}>
              <td>{specItemKey}</td>
              {specItemValue}
            </tr>
          );
        });

      let priceSmallTable = <td>{price}$</td>;

      let fabSmallTable = (
        <td>
          <GroupOfFabs id={product.id} inComparison={true} />
        </td>
      );

      return tableTemplate(
        titleSmallTable,
        imageSmallTable,
        prodSpecsSmallTable,
        priceSmallTable,
        fabSmallTable,
        `${classes.smallTable} ${classes.smallScreenSize}`,
        classes.titleSmallTable,
        index
      );
    });

    const { names, images, prices, fabs } = mainSpecsLargeTable;

    comparisonProducts = (
      <div className={classes.container}>
        <div className={classes.containerFlexColumn}>{smallProductTables}</div>
        {tableTemplate(
          names,
          images,
          prodSpecsLargeTable,
          prices,
          fabs,
          `${classes.largeTable} ${classes.largeScreenSize}`
        )}
      </div>
    );
  } else {
    comparisonProducts = (
      <PageContentPlaceholder placeholderContent="No items selected for comparison" />
    );
  }

  return <>{comparisonProducts}</>;
};

const mapStateToProps = (state) => ({
  products: state.comparisonItems,
});

Comparison.propTypes = {
  /**
   * Array of compared products
   */
  products: PropTypes.array.isRequired,
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Comparison));
