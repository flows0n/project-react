import './App.css';
import {InfoBox} from './components/InfoBox/InfoBox';
import List from './components/List/List';
import Button from './components/Button/Button'

function App() {

  const name=''

  return (
    <div className="App">
      <h1>Hello world</h1>
      <InfoBox name={name}/>
      <List/>
      <Button />
    </div>
  );
}

export default App;
