import React from "react";
import ValueProvider from './ValueStorageContext';
import TabStackDemo from './TabStackDemo'

const TabStackDemoWithContext = () => {
  const sendFeedback= (text) => {console.log('sending feedback:'+text)};
  const getFeedback = () => {console.log('getting feedback'); return(['f1','f2'])};
 
  let data = {name:"anon", email:"anon@anon.com", song:"", log:[], sendFeedback, getFeedback}

  return (
    <ValueProvider value={data} tag="@songs">
        <TabStackDemo />
    </ValueProvider>
  )
}

export default TabStackDemoWithContext;