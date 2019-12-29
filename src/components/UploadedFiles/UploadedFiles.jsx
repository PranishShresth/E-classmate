import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: '30vh',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  card: {
    width: '70vw',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const UploadedFiles = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
            <GridListTile cols={2} rows={2}>
              <img src='https://source.unsplash.com/1600x900/?school,bank' alt='std' />
              <GridListTileBar
                title='{tile.title}'
                titlePosition="top"
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
            <GridListTile cols={2} rows={2}>
              <img src='https://source.unsplash.com/1600x900/?school,music' alt='std' />
              <GridListTileBar
                title='{tile.title}'
                titlePosition="top"
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
            <GridListTile cols={2} rows={2}>
              <img src='https://source.unsplash.com/1600x900/?school,birds' alt='std' />
              <GridListTileBar
                title='{tile.title}'
                titlePosition="top"
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
            <GridListTile cols={2} rows={2}>
              <img src='https://source.unsplash.com/1600x900/?school,mango' alt='std' />
              <GridListTileBar
                title='{tile.title}'
                titlePosition="top"
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
        </GridList>
      </div>
    </Card>
  );
};

export default UploadedFiles;