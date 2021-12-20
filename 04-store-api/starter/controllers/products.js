const getAllProductsStatic = async(req, res) => {
    res.status(200).json({msg: "Products testing route"})
}

const getAllProducts= async (req, res) => {
    res.status(200).json({ msg:"Specific Product testing route"})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}