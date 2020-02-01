import React from 'react';
import Header from './components/Header';
import BaiTapLayOut from './components/BaiTapLayOut';
import Databinding from './Databinding/Databinding';
import DatabindingClass from './Databinding/DatabindingClass';
import BaiTapCar from './components/BaiTapCar';
import BaiTapVongLap from './Databinding/BaiTapVongLap';
import BaiTapVongLap2 from './Databinding/BaiTapVongLap2';
function App() {
  const greeting = 'Hello The Gioi';
  return (
    <div className="App">
      {/* <BaiTapLayOut greetingProps={greeting}/>  */}
      {/* Truyen props cho class Componet */}
      {/* <Databinding/> */}
      {/* <DatabindingClass/> */}
      {/* <BaiTapCar/> */}
      {/* <BaiTapVongLap></BaiTapVongLap> */}
      <BaiTapVongLap2/>
    </div>
  );
}

export default App;
