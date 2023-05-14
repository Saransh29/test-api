const express = require("express");
const router = express.Router();
const Table = require("../mongodb/Table.js");

router.get("/tables", (req, res) => {
  Table.find()
    .then((tables) => res.json(tables))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/tables/:id", (req, res) => {
  Table.findOne({ id: req.params.id })
    .then((table) => res.json(table))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/tables", (req, res) => {
  const newTable = new Table({
    id: req.body.id,
    data: req.body.data,
  });

  newTable
    .save()
    .then(() => res.json("Table added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/tables/:id", (req, res) => {
  Table.findOneAndDelete({ id: req.params.id })
    .then(() => res.json("Table deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/tables/:id", (req, res) => {
  Table.findOneAndUpdate(
    { id: req.params.id },
    { data: req.body.data },
    { new: true }
  )
    .then((table) => res.json(table))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/test", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
