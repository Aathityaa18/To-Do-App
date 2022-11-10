import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';

function App() {
  return (
    <div className='container border border-primary rounded mt-5'
    style={{
      background: `url(https://images.unsplash.com/photo-1602640572232-7345ff5f752d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTgzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60)`,
      backgroundSize: 'cover'
    }}
    >
      <Todo/>

    </div>
  );
}

export default App;
