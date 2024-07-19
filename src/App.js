import './App.css';
import Gallery from './Gallery';
import { Helmet } from 'react-helmet';
import Avatar from "./assets/30a2f69bc691c6ca8ac2b2fc4f14b0ae.jpg";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title> ENIKEN</title>
       
      </Helmet>
      
      <Gallery />
      <h1>Created by ENIKEN</h1>
    </div>
  );
}

export default App;
