const mongoose = require("mongoose");

const Table = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  data: {
    type: Array,
    required: true,
  },
});

const TableSchema = mongoose.model("Table", Table);
module.exports = TableSchema;

