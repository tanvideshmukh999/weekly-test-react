

import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Images from './Components/Images';

function App() {
  const [data,setData]=useState([]);
  const [limit,setLimit]=useState(30);
  const [height,SetHeight]=useState(1000);
  const apikey="kVeJ9_FubrJNuP7sxiJx4M9Dc49gg5vSRaZMhr2VTj0";


  const handleScroll=()=>{
    const scrolledHeight = window.innerHeight + document.documentElement.scrollTop;
    const totalHeight = document.documentElement.offsetHeight;

    console.log(scrolledHeight)
    const threshold = 100;

   
    if (totalHeight - scrolledHeight < threshold ) {
      fetchData();
    }
  }


  const fetchData=async()=>{
    try{
      const response=await axios.get(`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${limit}`);
       console.log(response.data)
       setData((olddata)=>[...olddata,...response.data])
    }
    catch(e){
       console.log("error occured",e);
    }
  }

  useEffect(()=>{
  

    fetchData()
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
     

  },[])

  return (
    <div className="App"  >
      <Header/>
      <div className='images-wrapper' >
        {
          data.map((images)=> {
            return <Images data={images}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
