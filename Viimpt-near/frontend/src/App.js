// import React from "react";
// import Todo from "./Todo";
// import AddTodo from "./AddTodo.js";
// import { Paper, 
//          List, 
//           } from "@material-ui/core";
// import {LinkContainer} from "react-router-bootstrap";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import "./App.css";
// import Routes from "./Routes";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//     };
//   }

//   add = (item) => {
//     const thisItems = this.state.items;
//     item.id = "ID-" + thisItems.length; // key를 위한 id추가
//     item.done = false; // done 초기화
//     thisItems.push(item); // 배열에 아이템 추가
//     this.setState({ items: thisItems }); // 업데이트는 반드시 this.setState로 해야됨.
//     console.log("items : ", this.state.items);
//   };

//   delete = (item) => {
//     const thisItems = this.state.items;
//     console.log("Before Update Items : ", this.state.items);
//     const newItems = thisItems.filter((e) => e.id !== item.id); // 해당 id 걸러내기
//     this.setState({ items: newItems }, () => {
//       // 디버깅 콜백
//       console.log("Update Items : ", this.state.items);
//     });
//   };

//   render() {
//     var todoItems = this.state.items.length > 0 && (
//       <Paper style={{ margin: 16 }}>
//         <List>
//           {this.state.items.map((item, idx) => (
//             <Todo item={item} key={item.id} delete={this.delete} />
//           ))}
//         </List>
//       </Paper>
//     );

//     // 3. props로 넘겨주기
//     return (
//       <div className="App">
//         <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
//         <LinkContainer to="/">
//           <Navbar.Brand className="font-weight-bold text-muted">
//             Viiimpt
//           </Navbar.Brand>
//         </LinkContainer>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Nav activeKey={window.location.pathname}>
//             <LinkContainer to="/signup">
//               <Nav.Link>Signup</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/login">
//               <Nav.Link>Login</Nav.Link>
//             </LinkContainer>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Routes />
//           <AddTodo add={this.add} />
//           <div className="TodoList">{todoItems}</div>
        
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes";

// function App() {
//   return (
//     <div className="root">
//       <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
//         <Navbar.Brand className="font-weight-bold text-muted">
//           Viimpt
//         </Navbar.Brand>
//         <Navbar.Toggle />
//       </Navbar>
//       <Routes />
//     </div>
//   );
// }
function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Scratch
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}
export default App;