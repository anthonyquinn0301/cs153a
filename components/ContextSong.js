import SongList from "./SongList";
import React, { useState } from "react";
import ValueProvider from './ValueStorageContext';
const ContextSong = () => {
    const data = {log:[]};
  
    return (
      <ValueProvider value={data}>
          <SongList />
      </ValueProvider>
    )
  }
  
  export default ContextSong;
  