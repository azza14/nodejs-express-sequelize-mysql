

// const createPool= require('mysql');
// const pool= createPool({
//     HOST:'localhost',
//     USER:'root',
//     PASSWORD:'',
//     database:'mysqltest',
//    // dialect:'mysql',
//     connectionLimit:10
    
// })
//  pool.query(`select * from registeration `,(err,result,fields)=>{
//      if (err){
//          return console.log(err)
//      }
//      return console.log(result)
//  })
 //module.exports= pool;
module.exports={
    HOST:'localhost',
    USER:'root',
    PASSWORD:'',
    DB:'mysql',
    dialect:'mysql',
    pool:{max:5,min:0,acquire:30000, idle:10000
    }

};