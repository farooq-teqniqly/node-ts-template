/* eslint-disable */

import axios from "axios";

module.exports = async function () {
  const host = process.env.HOST ?? "localhost";
  const port = process.env.PORT ?? "6000";
  axios.defaults.baseURL = `http://${host}:${port}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";
};
