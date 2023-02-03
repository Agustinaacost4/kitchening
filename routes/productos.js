const express =require('express');
const router = express.Router();

const {detalleProducto, listado} = require('../controllers/productController')

/* /products */

router
.get('/detalleProducto/:id', detalleProducto)
.get('/listado', listado)
.get('/add', add)



module.exports = router;