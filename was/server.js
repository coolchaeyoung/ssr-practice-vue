const express = require("express");
const server = express();

const PORT = 8080;

// server.get("/*", async (req, res) => {});

server.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
