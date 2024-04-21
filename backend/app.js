const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

//const LTEManger = new (require('./translationEngineManger'))(); 

const APIController = require("./APIController/APIController");


app.post('/', (req,res)=>{

    //add APIKey Verification
    APIController.TranslatePage(req,res);

});




app.listen(8080, ()=>{

    console.log("Server running on http://localhost:8080");
});