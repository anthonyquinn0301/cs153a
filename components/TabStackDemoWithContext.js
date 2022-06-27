import React from "react";
import ValueProvider from './ValueContext';
import TabStackDemo from './TabStackDemo'

const TabStackDemoWithContext = () => {
  const data = {name:"anon", email:"anon@anon.com"}

  return (
    <ValueProvider value={data}>
        <TabStackDemo />
    </ValueProvider>
  )
}

export default TabStackDemoWithContext;