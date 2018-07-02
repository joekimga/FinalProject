//ORIGINAL CODE  ----CODE ON BOTTOM IS A TEST---

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Parking from "./pages/Parking";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Parking} />
        <Route exact path="/parking" component={Parking} />
        <Route exact path="/parking/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;

//////////////////////////////////////////////////////

/*TEST CODE*/

// import React, { Component } from 'react';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     }
//   }

//   componentDidMount() {

//     fetch('http://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           isLoaded: true,
//           items: json,
//         })
//       });
//   }

//   render() {

//     var { isLoaded, items } = this.state;

//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     }

//     else {

//       return (
//         <div className="App">
          
//           <ul>
//             {items.map(item => (
//                 <li key={item.id}>
//                   {items.name} | {item.email}
//                 </li>
//               ))};
//           </ul>


//         </div>

//     );

//     }  
//   }
// }