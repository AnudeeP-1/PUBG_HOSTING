const express=require('express');
const user_id_cntrllers = require('../controllers/user_id_cntrllers');
const routers=express.Router();

routers.get('/',user_id_cntrllers.getById)
//routers.post('/rid',roomControllers.roomid);
   
module.exports=routers;