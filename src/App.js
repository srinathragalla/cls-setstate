// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
  
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ change: !this.state.change });
          }}
        >
          Click Here!
        </button>
        {this.state.change ? (
          <h2>heading type 2</h2>
        ) : (
          <h2>this is also a type 2 heading</h2>
        )}
      </div>
    );
  }
}
  
export default App;
