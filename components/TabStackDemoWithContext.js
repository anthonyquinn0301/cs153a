import React from "react";
import ValueProvider from './ValueStorageContext';
import TabStackDemo from './TabStackDemo'

const TabStackDemoWithContext = () => {

  const sendFeedback = async (feedback) => {

    const response = 
      await Axios.post(url+"/cloud/store",
                          {email:'tjhickey@brandeis.edu',
                           key:'asyncCDfeedback',
                           value:feedback,
                          });
    console.dir(response.data);
    //setResult(JSON.stringify(response.data));
};

const getFeedback = async (saveFeedback) => {
  console.log('getting feedback')
  const response = await Axios.post(url+"/cloud/get",
            {email:'tjhickey@brandeis.edu',key:'asyncCDfeedback'});
  console.log('got feedback:')
  console.dir(response.data)
  saveFeedback(response.data);

}; 

const clearData = async(email) => {
  console.log('clear');
  const response = await Axios.post(url+"/cloud/clear",{email:'tjhickey@brandeis.edu'});
};
 
  let data = {name:"anon", email:"anon@anon.com", song:"", log:[], sendFeedback, getFeedback, clearData}

  return (
    <ValueProvider value={data} tag="@songs">
        <TabStackDemo />
    </ValueProvider>
  )
}

export default TabStackDemoWithContext;