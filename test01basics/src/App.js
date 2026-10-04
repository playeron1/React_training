import logo from './logo.svg';
import './App.css';

function welcome_msg(){
  return <p>Welcome to welcome_function!</p>
}

function App() {
  return (
    <div>
      <p>Hello World</p>
      <ol>
        <li>Onion</li>
        <li>Tomato</li>
        <li>Bhidn</li>
      </ol>
      <h1>Notion App</h1>
      <h6>Notion App</h6>
      <welcome_msg />
    </div>
  );
}

export default App;
