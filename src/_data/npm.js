const axios = require("axios");

module.exports = async () => {
  const res = await axios.get("https://api.npms.io/v2/package/%4011ty%2Feleventy");
  return res.data;
};
