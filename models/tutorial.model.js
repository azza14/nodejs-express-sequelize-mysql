const sequelize = require("../config/db.config.js");
const Sequelize = require("sequelize");

// module.exports=(sequelize,Sequelize)=>
// {   
//     const Tutorial= sequelize.define('Tutorial',
//     {
//         title:{
//             type:Sequelize.String
//         },
//         description:{
//             type:Sequelize.String
//         },
//         publishrd:{
//             type:Sequelize.Boolean
//         }
//     });
//     return Tutorial;
// };
module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("Tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      
    },
    {
      freezeTableName:true
     }
     );
  
    return Tutorial;
  };
