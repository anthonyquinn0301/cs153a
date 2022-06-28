import React from "react";
import ValueProvider from './ValueStorageContext';
import TabStackDemo from './TabStackDemo'

const TabStackDemoWithContext = () => {
  const data = {name:"anon", email:"anon@anon.com", song:"", log:[]}

  return (
    <ValueProvider value={data} tag="@songs">
        <TabStackDemo />
    </ValueProvider>
  )
}

export default TabStackDemoWithContext;