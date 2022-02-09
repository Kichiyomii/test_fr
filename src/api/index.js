import axios from 'axios' ;
 
axios.defaults.baseURL = "linktoyourserver.com";

axios.interceptors.response.use(
    function (response) {
      return response.data;
    },
    (error) => {
      return error.response.data;
    }
  );

  export default {
    quiz: {
      async writepost(post) {
        return await axios.post("api/users/registration", user);
      },
    }
}