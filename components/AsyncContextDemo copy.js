import React from "react";


import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {
 

  let data = {username:'anon0'};

  return (
    <ValueProvider value={data}>
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;