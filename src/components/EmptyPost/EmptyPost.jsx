import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import UploadButtonDialog from "../../components/UploadButtonDialog/UploadButtonDialog";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.common.black,
    marginBottom: "3vh",
  },
  vote: {
    width: "21px",
    marginRight: "3px",
    marginLeft: "2vw",
    marginTop: "1.5vh",
  },
  voteTitle: {
    display: "flex",
    marginBottom: "3vh",
  },
  titles: {
    marginTop: "1.5vh",
  },
  upvotes: {
    marginTop: "3.7vh",
    marginRight: "13px",
  },
}));

const EmptyPost = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.voteTitle}>
        <div className={classes.vote}>
          <ArrowDropUpIcon />
          <ArrowDropDownIcon />
        </div>
        <Typography className={classes.upvotes}>6</Typography>
        <div className={classes.titles}>
          <Typography variant="h6">Homework</Typography>
          <Typography variant="subtitle2">Requested by @username</Typography>
        </div>
      </div>
      <UploadButtonDialog />
    </Card>
  );
};

export default EmptyPost;
