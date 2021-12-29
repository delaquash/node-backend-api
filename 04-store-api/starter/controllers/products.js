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
    const product = await Product.find({ 
        price : { $gt: 30 } //Price greater than 30
    })
    .sort("price")
    // .sort("name") //To sort out name and price (alphabetical order)
    .select('name price') //to select name and price
    .limit(4) //to limit number of response to 4
    .skip(1) //Skips the first item on the array in the response
    res.status(200).json({ product, nbHits: product.length  })
}

const getAllProducts= async (req, res) => {

    const { featured, company, name, sort, fields, numericFilters } = req.query
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

    // numeric filter based on certain parameters
    if(numericFilters){
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<':'$lt',
            '<=': '$lte'
        }

        const regex = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(regex, (match)=> `-${operatorMap[match]}-`)
        console.log(filters)
        const options = ['price', 'rating']
        filters = filters.split('').forEach((item) => {
            const [ field, operator, value] = item.split('-')
            if(options.includes(field)) {
                queryObject[field] = {[operator]: Number(value)}
            }
        })
    }
    // console.log(queryObject)
    let result = Product.find(queryObject)
    if(sort){
        //Adding sort functionalities 
        const sortList = sort.split(',').join('')
        result = result.sort(sortList)
    }else {
        result = result.sort("createdAt")
    }

    if(fields){
        const fieldList = fields.split(',').join('')
        result = result.select(fieldList)
    }

    const page = Number(req.query.page) || 1 //More like pagination
    const limit = Number(req.query.limit) || 7 //limit the number of response we get
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit)


    const product = await result
    res.status(200).json({  product, nbHits: product.length })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}