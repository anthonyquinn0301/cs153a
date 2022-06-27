import React from "react";
import ValueProvider from './ValueStorageContext';
import TabStackDemo from './TabStackDemo'

const TabStackDemoWithContext = () => {
  const data = {name:"anon", email:"anon@anon.com", song:""}

  return (
    <ValueProvider value={data}>
        <TabStackDemo />
    </ValueProvider>
  )
}

export default TabStackDemoWithContext;