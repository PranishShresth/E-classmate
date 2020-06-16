import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import AddPost from "../../components/AddPost/AddPost";
import EmptyPost from "../../components/EmptyPost/EmptyPost";
import OnePost from "../../components/OnePost/OnePost";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "80vh",
    paddingTop: "25vh",
  },
  card: {
    backgroundColor: theme.palette.common.black,
  },
  button: {
    marginLeft: "auto",
    backgroundColor: theme.palette.primary.main,
  },
  buttonContainer: {
    marginLeft: "24vw",
    marginBottom: "11px",
  },
}));

class Assignment extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get("/users")
      .then((res) => console.log(res))
      .then((users) => this.setState({ posts: users }));
  }
  render() {
    return (
      <>
        {console.log(this.state.posts)}
        <Assignments></Assignments>
      </>
    );
  }
}

const Assignments = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AddPost />
      <EmptyPost />
      <OnePost />
      <OnePost />
      <OnePost />
      <EmptyPost />
    </div>
  );
};
export default Assignment;
