import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import { isWidthUp } from "@material-ui/core/withWidth";
import tileData from "./titledata";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "auto",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function TitlebarGridList(props) {
  const classes = useStyles();

  const getGridListCols = (screenWidth) => {
    if (isWidthUp("desktop", screenWidth)) {
      return 3;
    }

    if (isWidthUp("tablet", screenWidth)) {
      return 2;
    }

    if (isWidthUp("mobile", screenWidth)) {
      return 1;
    }

    return 1;
  };
  const cols = getGridListCols(props.deviceType);
  return (
    <div className={classes.root} style={{ width: "auto", height: "auto" }}>
      <GridList
        spacing={15}
        cellHeight={400}
        className={classes.gridList}
        cols={cols}
      >
        <GridListTile key="Subheader" cols={1} style={{ height: "auto" }}>
          <ListSubheader component="div">Descrizione</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Tipo: {tile.type}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                ></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
