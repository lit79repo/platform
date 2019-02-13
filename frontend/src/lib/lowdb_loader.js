import axios from 'axios';
class Storage {
  constructor(url) {
    if (url !== undefined) {
      this.url = url;
    } else {
      this.url = location.protocol +
        "//" +
        location.hostname + //+ ":3000",
        (location.port ? ":" + location.port : "")
    }
  }

  read() {
    return axios
      .get(this.url + "/db/get/lessons")
      .then(response => {
        return response;
      })
  }

  write(data) {
    console.log(data);
  }
}
export default Storage;
