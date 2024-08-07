import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/connectDB";
require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: true}))


viewEngine(app);
initWebRoutes(app);
connectDB(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("Backend NJS is running on the port: " + port)
})