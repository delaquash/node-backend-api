const Product = require('../models/product')

const getAllProductsStatic = async(req, res) => {
    const product = await Product.find( {featured: true} )
    res.status(200).json({ product, nbHits: product.length  })
}

const getAllProducts= async (req, res) => {
    const product = await Product.find(req.query)
    res.status(200).json({  product, nbHits: product.length })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}