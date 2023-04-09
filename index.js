//Babel is a javascript compiler that helps us compile to the lastest browser configuarations 

import express  from "express";

const app = express();

const PORT = 3000;

app.get('/', (req,res)=>{
    res.send(`server is running on port ${PORT}`);
});


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});