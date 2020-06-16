import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";

import AddPost from "../../components/AddPost/AddPost";
import EmptyPost from "../../components/EmptyPost/EmptyPost";
import OnePost from "../../components/OnePost/OnePost";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
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
      .get("/api/posts")
      .then((res) => res.data)
      .then((posts) => this.setState({ posts }));
  }

  render() {
    return (
      <>
        <Assignments posts={this.state.posts} />
      </>
    );
  }
}
const Assignments = (props) => {
  const classes = useStyles();
  if (props.posts.length >= 1) {
    return (
      <div className={classes.container}>
        <AddPost />

        {props.posts.map((post) => (
          <OnePost
            name={post.name}
            subject={post.subject}
            professor={post.professor}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        <AddPost />

        <EmptyPost></EmptyPost>
      </div>
    );
  }
};
export default Assignment;
