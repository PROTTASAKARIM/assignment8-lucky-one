import './App.css';
import Header from './components/Header/Header';
import QusAns from './components/QusAns/QusAns';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <QusAns></QusAns>
    </div>
  );
}

export default App;
