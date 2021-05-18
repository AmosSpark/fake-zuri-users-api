const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({path: "../../../config.env"});
let DBstring = process.env.DATABASE.replace(
    '<PASSWORD>', process.env.DATABASE_PASSWORD
); 
const mongoURI = DBstring;  
const connectMsg = `> Database connection successful ✅`;
const notConnectedMsg = `> Couldn't connect to database ❌`;
  
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => 
    console.log(connectMsg)
  ).catch((error) => 
    console.error(`${notConnectedMsg}\n> Error message: ${error.message}`)
  );
