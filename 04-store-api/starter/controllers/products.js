const Product = require('../models/product')

const getAllProductsStatic = async(req, res) => {
    // using regex to find a particular name from products.json using a value declared in search
    // const search = "ae"
    // const product = await Product.find({ 
    //     name: {
    //         $regex: search,
    //         $options: 'i'
    //     }
    // })
    const product = await Product.find({}).sort("-name price")
    res.status(200).json({ product, nbHits: product.length  })
}

const getAllProducts= async (req, res) => {

    const { featured, company, name, sort } = req.query
    const queryObject = {}

    if(featured){
        queryObject.featured = featured === 'true' ? true : false
        
    }
    if(company){
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    // console.log(queryObject)
    let result = Product.find(queryObject)
    if(sort){
        //Adding sort functionalities 
        const sortList = sort.split(',').join('')
        resutl = result.sort("createdAt")
        
    }
    const product = await result
    res.status(200).json({  product, nbHits: product.length })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}