require('dotenv').config();
require('./auth/passport');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const quizRoute = require("./routes/quiz");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const materialRoute = require("./routes/material");
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const db = require("./models");
db.sequelize.sync();

app.use('/api/quiz', quizRoute);
app.use('/api/category', categoryRoute);
app.use('/api/material', materialRoute);
app.use('/api/', userRoute);

app.use(cors());
app.get('/', (req, res) => {
    res.json({message : "Hello World!"});
})

app.listen(port,()=>{
    console.log(`App listening on port http://localhost:${port}`);
})