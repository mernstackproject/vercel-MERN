const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("listening on port" + port);
});
const data = [
  {
    name: "hello world",
    lname: "gupta",
  },
  {
    name: "harry",
    lname: "gupta",
  },
];
app.get("/json", (req, res) => {
  res.send(data);
});
