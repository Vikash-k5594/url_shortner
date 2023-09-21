import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';

import Input_url from './Input_url';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
     <Input_url setInputValue={setInputValue}/>
     <BackgroundAnimate />
     <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
