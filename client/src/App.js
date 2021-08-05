
import './css/App.css';

import Quora from './components/Quora'
import Login from './components/auth/login';
import { selectUser} from './features/userSlice';
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {
      user ? (<Quora/>) : (<Login/>)
      }
      <header className="App-header">
        <Quora />
      </header>
    </div>
  );
}

export default App;
