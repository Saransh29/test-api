const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: ".env" });
const connectDB = require("./mongodb/connect.js");
const routes = require("./routes/apiRoutes.js");

app.use(express.json());
app.use(cors());

app.use("/api", routes);

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
