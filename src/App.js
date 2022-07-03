import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carausel from './component/carausel';
import MarqueeComp from './component/marquee';
import NavbarComp from './component/navbar';


function App() {
  return (
    <div className="App">
     <MarqueeComp/>
     <hr/>
     <NavbarComp/>
     <hr/>
     <Carausel/>
    </div>
  );
}

export default App;
