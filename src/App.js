
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [tips, setTips] = useState ("");

  useEffect(()=> {
    getTips()
  },[])

    const getTips = async() => {
      const response = await fetch (`http://www.boredapi.com/api/activity/`);
      const data = await response.json()
      setTips(data.activity)
    }


  return (
    <div className="App">
      
      <h1>If you are bored </h1>
      <button onClick={getTips}>click here to see what you can do</button>     
      <p>{tips}</p> 
    </div>
  );
}

export default App;
