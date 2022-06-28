import React from "react";
import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {
 

  let data = {name:'Tim Hickey', age:"66.95", weight:"165", height:"68",log:[]};

  return (
    <ValueProvider value={data}>
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;