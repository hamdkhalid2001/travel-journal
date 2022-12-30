import './App.css';
import Header from './components/Header'
import TravelPlace from './components/TravelPlace';
import places from './constants/data';

function App() {
  let placesArr = places.map((place)=>{
    return <TravelPlace key={place.id} {...place}/>
  })
  return (
    <div className="App">
      <Header/>
      <main>
        {placesArr}
      </main>
    </div>
  );
}

export default App;
