const dbConnect = require('./db-connect')
const Users = require('../models/User')
const Formations = require('../models/Formations')
const Organismes = require('../models/Organismes')
const Roles = require('../models/Role')
const rolesArray = ['admin', 'employe']
const bcrypt = require('bcrypt')
const FirstAdmin = {
    first_name : process.env.ADMIN_FNAME,
    last_name : process.env.ADMIN_LNAME,
    email : process.env.ADMIN_EMAIL,
    password : process.env.ADMIN_PASSWORD,
    role: "admin"
}


const initData = async()=>{
    await dbConnect();
    await creatRolesData();
    await creatFirstAdmin();
}


const creatRolesData = async() => {
        Roles.estimatedDocumentCount((err, count) => {
          if (err) {
            console.error(`Error checking if collection roles is empty: ${err}`);
          } else if (count === 0) {
            for (let i = 0; i<rolesArray.length; i++){
                Roles.create({name:rolesArray[i]})
            }
            console.log('role collection created');
          } else {
            console.error('Error: role collection is not empty');
          }
        });
      };
 

const creatFirstAdmin = async() => {
        const user = await Users.findOne({email: FirstAdmin.email});
        if (!user) {
          const salt = bcrypt.genSaltSync(10);
          FirstAdmin.password = await bcrypt.hash(FirstAdmin.password, salt);
          const adminRole = await Roles.findOne({name: FirstAdmin.role});
          FirstAdmin.role_id = adminRole._id;
          Users.create({...FirstAdmin}).then(() => {
            console.log('admin added to Users collection');
          })
          .catch(err => {
            res.send(err);
          });
        } else {
          console.log('Admin existed');
        }
      };
     
      
      
      
      
      
      
      
      
      
      
      





module.exports = initData