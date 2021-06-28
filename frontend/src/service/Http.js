import axios from "axios";

export default class Http {
  static server = 'http://localhost:3000';
  //static server = "http://34.121.105.4/";

  static async login(data) {
    const response = await axios
      .post(Http.server + "login", data)
      .then((res) => res.data);
    return response;
  }
}