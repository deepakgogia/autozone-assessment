import './App.css';
import { LoadingScreen } from './views/components/core/LoadingScreen';
import Main from './views/pages/Main/Main';

function App() {

  return (
    <div className="App">
      <Main />
      <LoadingScreen />
    </div>
  );
}

export default App;
