import React, { Component } from "react";
import { AppBar, Drawer } from "@material-ui/core";
import { thisExpression } from "@babel/types";

export default class DashBoard extends Component {}

// export default class DashBoard extends Component {
//   state = {
//     userId: Math.floor(Math.random() * 200 + 100),
//     title: "",
//     body: ""
//   };

//   //   async componentDidMount() {
//   //     const api = await fetch("https://jsonplaceholder.typicode.com/posts");
//   //     const data = await api.json();
//   //     this.setState({
//   //       data
//   //     });
//   //     console.log(this.state);
//   //   }

//   handleSubmit = event => {
//     event.preventDefault();
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         body: this.state.body,
//         title: this.state.title,
//         userId: Math.floor(Math.random() * 200 + 100)
//       })
//     }) .then(response => response.json())
//     .then(json => console.log(json))

//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         {/* {this.state.data.map(post => {
//           return (
//             <div>
//               <h1>{post.title}</h1>
//               <p>{post.id}</p>
//             </div>
//           );
//         })} */}
//         <form onSubmit={this.handleSubmit}>
//           <input
//             placeholder="Title"
//             type="text"
//             value={this.state.title}
//             onChange={ev => this.setState({ title: ev.target.value })}
//           />
//           <input
//             placeholder="Body"
//             type="text"
//             value={this.state.body}
//             onChange={ev => {
//               this.setState({ body: ev.target.value });
//             }}
//           />
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     );
//   }
// }
