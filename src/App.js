
import './App.css';
import ProfilePhoto from './componenets/Profile/ProfilePhoto';
import FullName from './componenets/Profile/FullName';
import Adresse from './componenets/Profile/Adresse';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ProfilePhoto />
      <FullName />
      <Adresse />
      </header>
    </div>
  );
}

export default App;
