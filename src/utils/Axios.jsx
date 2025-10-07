import axios from "axios";

const instance = axios.create({
    baseURL : "https://fakestoreapi.com/",
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("Reques ->",config);
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


// Add a response interceptor
instance.interceptors.response.use(function (response) {
  console.log("response ->",response);
    return response;
  }, function (error) {
    return Promise.reject(error);
  });


export default instance