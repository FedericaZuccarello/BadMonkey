import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ItemCardShop from "../smallComponents/ItemCardShop";
import fuciliData from "../dataImg/fuciliData";
import pistoleData from "../dataImg/pistoleData";
import { INSTOCK } from "../../type";

function TabPanel(props) {
  const { children, value, index, deviceType, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
        >
          <LinkTab href="/shop" label="SHOP" {...a11yProps(0)} />
          <LinkTab href="/shop/fucili" label="FUCILI" {...a11yProps(1)} />
          <LinkTab href="/shop/pistole" label="PISTOLE" {...a11yProps(2)} />
          <LinkTab
            href="/shop/abbigliamento"
            label="ABBIGLIAMENTO"
            {...a11yProps(3)}
          />
          <LinkTab href="/shop/accessori" label="ACCESSORI" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Vetrina
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {fuciliData.map((fucile) => {
            return fucile.code && fucile.inStock === INSTOCK.Si ? (
              <Grid item xs>
                <ItemCardShop
                  key={fucile.code}
                  img={fucile.img}
                  price={fucile.price}
                  title={fucile.title}
                  description={fucile.description}
                  {...fucile}
                />
              </Grid>
            ) : null;
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {pistoleData.map((pistola) => {
            return pistola.code && pistola.inStock === INSTOCK.Si ? (
              <Grid item xs>
                <ItemCardShop
                  key={pistola.code}
                  img={pistola.img}
                  price={pistola.price}
                  title={pistola.title}
                  description={pistola.description}
                  {...pistola}
                />
              </Grid>
            ) : null;
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
}
