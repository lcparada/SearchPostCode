import axios from "axios";

const receiveCEP = axios.create({
  baseURL: "https://api.invertexto.com/v1/cep/",
});

export default receiveCEP;
