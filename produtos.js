const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).send({
        mensagem:"usando o get dentro da rota de produtos"
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).send({
        mensagem:"usando o post dentro da rota de produtos "
    });
});


module.exports = router