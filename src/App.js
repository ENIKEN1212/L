import './App.css';
import Gallery from './Gallery';
import { Helmet } from 'react-helmet';


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
