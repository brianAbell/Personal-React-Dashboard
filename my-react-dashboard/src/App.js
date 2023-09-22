import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';  // make sure you point to the correct path


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

function App() {
  return (
      <div className="App">
          <h1>My React Dashboard</h1>
          <TaskList />
          {/* ... other components you'll add in the future ... */}
      </div>
  );
}

export default App;
