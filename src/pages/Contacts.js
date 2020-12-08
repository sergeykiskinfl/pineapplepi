// React stuff
import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  ...theme.spreadThis,

  phone: {
    marginTop: 10
  },

  container: {
    ...theme.spreadThis.container,
    minHeight: 200,
    minWidth: 300,
    margin: "15px auto"
  },

  picture: {
    marginRight: 8
  },

  cardImageSpecification: {
    width: "100%",
    minHeight: 400,
    objectFit: "contain"
  },

  "@media screen and (max-width: 700px), handheld": {
    card: {
      ...theme.spreadThis.card,
      marginTop: 100,
      marginBottom: 0,
      minWidth: 100,
      padding: 15
    },

    largeScreenSize: {
      display: "none"
    }
  },

  "@media screen and (min-width: 700px)": {
    smallScreenSize: {
      display: "none"
    },

    card: {
      ...theme.spreadThis.card,
      marginTop: 100,
      marginBottom: 0,
      minWidth: 700,
      padding: 15
    }
  }
});

// Contacts page
const Contacts = ({ classes }) => {
  let markup;

  markup = (
    <Card className={classes.card}>
      <CardHeader
        title="Our contacts"
        titleTypographyProps={{ variant: "h5" }}
      />
      <CardMedia
        component="iframe"
        className={classes.cardImageSpecification}
        src="YOUR_API_KEY_HERE"
      />
      <CardContent className={classes.cardContent}>
        <Typography
          variant="body1"
          color="inherit"
          className={classes.smallScreenSize}
        >
          400 Broad St, Seattle, WA 98109, USA
        </Typography>
        <Box className={`${classes.containerFlexRow} ${classes.phone}`}>
          <Typography variant="body1" color="secondary">
            <PhoneIcon className={classes.picture} />
          </Typography>
          <Typography variant="body1">(XXX) XXX-XX-XX</Typography>
        </Box>
        <Box className={classes.containerFlexRow}>
          <Typography variant="body1" color="secondary">
            <MailIcon className={classes.picture} />
          </Typography>
          <Typography variant="body1">example@gmail.com</Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return <Box className={classes.container}>{markup}</Box>;
};

Contacts.propTypes = {
  /**
   * Styles of the component
   */
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contacts);
