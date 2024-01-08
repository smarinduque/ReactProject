const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors());

const db = require('./models');

//Routers
const userAccountRouter = require('./routes/UserAccount');
app.use("/UserAccount", userAccountRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () =>{
        console.log("server is running!")
    });
});
