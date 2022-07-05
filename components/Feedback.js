/*
*/
import Axios from 'axios';

const url="https://damp-springs-29329.herokuapp.com";

const sendFeedback = async (feedback) => {
    const response = 
      await Axios.post(url+"/cloud/store",
                          {email:'anthonyquinn@brandeis.edu',
                           key:'AlbumList',
                           value:feedback,
                          });
    console.dir(response.data);
};

const getFeedback = async (saveFeedback) => {
  console.log('getting feedback')
  const response = await Axios.post(url+"/cloud/get",
            {email:'anthonyquinn@brandeis.edu',key:'AlbumList'});
  console.log('got feedback:')
  console.dir(response.data)
  saveFeedback(response.data);

}; 

const clearData = async(email) => {
  console.log('clear');
  const response = await Axios.post(url+"/cloud/clear",{email:'anthonyquinn@brandeis.edu'});
};

export {sendFeedback,getFeedback,clearData};
