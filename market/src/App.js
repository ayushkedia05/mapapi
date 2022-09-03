import logo from './logo.svg';
import './App.css';

import Productform from './components/sellercomponent/productregistration';
import {Route} from 'react-router-dom';
// import BadgeCard from './components/header/header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthenticationImage } from './components/login/login';
import TourCard from './components/card/card';

import { HeaderSimple } from './components/navHeader/navheader';

import Register from './components/login/register';
// import { AxisX } from 'tabler-icons-react';
function App() {
  const [marketdata,setdata]=useState([]);
  //  let inittialstate=[];
// const data=axios.get('https://127.0.0.1:3000/api/tours/')
 
// console.log(data);
useEffect(()=>{
const data = async ()=>{
  const d = await axios.get ('http://localhost:3000/api/v1/tours/');
  // console.log(d.data.data.tours);

  // console.log(d);
  setdata(d.data.data.tours);
  // console.log('d')
return d;
};
data();
},[])


//  console.log(inittialstate);
const numbers = [65, 44, 12, 4];
  return (
    <div className="App">

<a href='/welcome'>hello</a>

  <div>

  <Route path="/">
    <HeaderSimple></HeaderSimple>
 
    </Route>

    <Route path="/welcome">
    <AuthenticationImage></AuthenticationImage>
    </Route>


    <Route path="/register">
    <Register></Register>
    </Route>

    <Route path="/seller">
    <Productform></Productform>
    </Route>

    <Route path="/product">
   
    <div className="productposters">
    {marketdata.map((product,int)=>(
      <TourCard description={product.description} name={product.name} key={int} price={product.price} days={product.days} email={product.email} imageCover={product.imageCover} ></TourCard>
))}
</div>

    </Route>
  </div>












    </div>
  );
}

export default App;
