import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';

function App() {
  return (
    <div className='container border border-primary rounded mt-5'
    style={{
      background: `url(https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG5vdGVib29rfGVufDB8MHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=600&q=60)`,
      backgroundSize: 'cover'
    }}
    >
      <Todo/>

    </div>
  );
}

export default App;
