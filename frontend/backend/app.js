const express = require("express");
const app = express();
const auth = require("./routes/auth");
const list = require("./routes/list");

app.use(express.json());

require("./conn/conn");
app.get("/", (req, res) => {
    res.send("My TODOLIST")
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(1000, () => {
    console.log("Server Started");
  });