//import axios from "axios";

export default class Http {
  static server = 'http://localhost:3000';
  //static server = "http://34.121.105.4/";

  static async login(data) {
    console.log(data);
    // const response = await axios
    //   .post(Http.server + "login", data)
    //   .then((res) => res.data);
    // return response;
    if(Math.random()<0.8)
      return data;
    else
      return 'fail';
  }

  static async registrar(data) {
    console.log(data);
    // const response = await axios
    //   .post(Http.server + "registrar", data)
    //   .then((res) => res.data);
    // return response;
    if(Math.random()<0.8)
      return 'ok';
    else
      return 'fail';
  }
}