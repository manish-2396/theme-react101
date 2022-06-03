
import './App.css';
import { useContext, useState } from 'react';
import userInfo from './data/users.json';
import Bag from './components/Bag'
import Navbar from './components/Navbar';
import { Themecontext } from './context/Themecontext';


function App() {
  const [data, setdata] = useState(userInfo)
  const {isLight}=useContext(Themecontext)
  console.log(data)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar/>
     <Bag data={data}/>
    </div>
  );
}

export default App;
