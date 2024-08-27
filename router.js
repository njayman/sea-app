const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Hello world");
});

router.post("/", (req, res) => {
  const queries = JSON.stringify(req.query, null, 2);
  res.send(queries);
});

module.exports = router;
