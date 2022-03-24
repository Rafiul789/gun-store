import './App.css';
import React,{useState,useEffect} from 'react';
import Navbar from './Navbar/Navbar';
import Card from './Card/Card';

const App = () => {
  const [guns,setGuns]=useState([]);
 
  useEffect(()=>{

fetch('data.json')
.then(res=>res.json())
.then(data=>setGuns(data))

  },[])
  return (
    <div>
      
      <Navbar></Navbar>
      <div className="gun-container"> {
        guns.map(gun=><Card key={gun.id}  gunData={gun} > </Card>)
      }  </div>
     
     
    </div>
  );
};

export default App;