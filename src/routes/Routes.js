const routes = app =>{
    app.route('/contact')
    //recieves data from the server
    .get((req,res,next)=>{
        //middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`request type: ${req.method}`);
        next();
        
    },
    (req,res,next) =>{
        res.send('GET request successful');
    }
    )
    //adds new data to the server
    .post((req,res)=>{
        res.send('POST request successful');
    })


    app.route('/contact/:contactId')
    //updates data from the server
    .put((req,res)=>{
        res.send('PUT request successful');
    })
    //deletes data from the server
    .delete((req,res)=>{
        res.send('DELETE request successful');
    })
}

export default routes;