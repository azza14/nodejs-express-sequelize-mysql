 module.exports= app =>{
     const tutorials= require('../controller/tutorial.controller.js');
     var router= require('express').Router();


     // create route  new tutorial 
     router.post('/add',tutorials.create);


     // retive all 
     router.get("/all", tutorials.findAll);
     
     // retive single tutorial
     router.get('/findone/:id',tutorials.findOne);
     
     //update tutorial
     router.put('/update/:id',tutorials.update);
    
     //Delete a Tutorial with the specified id:
     router.delete('/:id',tutorials.delete)

     // Delete all objects
    router.delete('/',tutorials.deleteAll);

    // find by condition
    router.get('/published',tutorials.findAllPublished);
     
     app.use('/api/tutorials', router);
 }