import Home from "./Home";
import React from "react";
function App() {

  let arr = ['Home','About', 'Contact', 'Services']
  return (
    <div>
       <Home data1={arr}/>
      {/* <Home data1='home'/>
      <Home data1='about' />
      <Home data1='Services'/>
      <Home data1='Contact' /> */}
      <h1>Hello</h1>
      <h1>Hello Duniya</h1>
    </div>
  );
}

export default App;
