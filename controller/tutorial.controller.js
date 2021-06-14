const { tutorials } = require("../models");

exports.create=(req,res)=>{

    if(!req.body.title){
         res.status(404).send({
            message: "Content can not be empty!"
         });
         return;
    }
     const tutarial= {
         title: req.body.title,
         description: req.body.description,
         published: req.body.published ?  req.body.published : false
     };
     tutorials.create(tutarial).then(data=>{
         res.send(data) .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });
     });

 };

 //retrive all 
 exports.findAll=(req,res)=>{
     const title= req.body.title;
     var condition =title ?{ title :{[Op.like]:`%${title}%` } } : null;

      tutorials.findAll({where :condition})
      .then(data =>{
          res.send(data);
      })
      .catch(error =>{
          res.status(500).send({
              message: error.message || 'Some error occurred while retrieving tutorials.'
          });
      });

};
// find single tutorial
exports.findOne=(req,res)=>{
  const id= req.params.id;
    tutorials.findByPk(id).then(data =>{
        res.send(data)
    })
    .catch(error=>{
         res.status(data).send({
         message:'error retrieving Tutorial with id=  '+id 
         });
    });
};

// edit  by id
exports.update=(req,res)=>{
 const id = req.params.id;
    tutorials.update(req.body, {
        where:{id:id}
    }).then(num=>{
        if(num==1){
            res.send({
                message:' updated success'
            });
        }
        else{
            res.send({
                message:'cannot update Tutorial with id='+id+' Maybe Tutorial was not found or req.body is empty!'
            });
        }
    })
    .catch(error=>{
        res.status(500).send({
            message:"Error updating Tutorial with id=" + id
        })
    })

};

//delete by id
exports.delete=(req,res)=>{
    
  const id= req.params.id;
  tutorials.destroy({
      where :{id:id}
  })
  .then(num=>{
      if(num ==1){
          res.send({
              message:' deleted successfully'
          })
      }
      else{
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          })
      }
  })
  .catch(error =>{
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id

      })
  })
};

//delete all
exports.deleteAll= (req,res)=>{
   tutorials.destroy({
       where:{},
       truncate:false
   }).then(num=>{
       res.send({  message: num +'Tutorials were deleted successfully'})
   })
   .catch(error =>{
    res.status(500).send({
      message:         
        error.message || "Some error occurred while removing all tutorials."
    })
})
};

// find all published 
exports.findAllPublished= (req,res)=>{
    
    tutorials.findAll({
        where:{published:true}
    }).then(num=>{
        res.send(num);
    })
    .catch(error =>{
        res.status(500).send({
          message:         
            error.message || "Some error occurred while retrieving tutorials."
        })
    });
}