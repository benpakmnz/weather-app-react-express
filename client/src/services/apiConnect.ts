import axios from "axios";

class apiConnect {
  private url;

  constructor() {
    this.url = process.env.REACT_APP_BASE_URL;
  }
  async post(path: string, body: any) {
    const res = await axios.post(`${this.url}/${path}`, body);
    return res;
  }

  async patch(path: string, body: any) {
    const res = await axios.patch(`${this.url}/${path}`, body);
    return res;
  }
}

export default apiConnect;
