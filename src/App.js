import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';

function App() {

  return (
    <div className="App">
      <TodoFeature />
      <AlbumFeature />
      <ColorBox />
      <Counter />
    </div>
  );
}

export default App;
