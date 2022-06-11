const { Router } = require ('express');
const router = Router();

const { email } = require('../controllers/email-hostinger');



router.post('/',[
],email); 







module.exports= router;