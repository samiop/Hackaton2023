import axios from "axios";


const API_URL = "http://localhost:5000/api/twitter/";

const config ={
  headers:{
    'content-type': 'multipart/form-data'

}
}

const  TwitterPost= () => {
    return axios.post(API_URL + "all",);
  };


  export default  {
    TwitterPost,
  
    // ,
    // login,
    // logout,
  };