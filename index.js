const express = require("express");
const cors = require("cors");

const router = require("./router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", router);

const port = parseInt(process.env.PORT) || 1337;

app.listen(port);
