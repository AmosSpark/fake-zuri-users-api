const dotenv = require("dotenv");

const app = require("./app");

dotenv.config({path: "./config.env"});

require("./src/models/config/db/mongoDB"); // DB

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(
      `> 😊 App now running\n> Server listening on PORT: ${port}... \n> Base URL: http://localhost:${port}/`
    );
});