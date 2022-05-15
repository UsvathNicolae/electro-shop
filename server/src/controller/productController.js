const { fetchById, fetchAllProducts, postProductDB, putProductDB, deleteProductDB } = require('../repository/productRepository');
const {convertBufferToString} = require("../utils/utils");

const fetchProductById = async (req, res) => {
    const { id } = req.params;
    try{
        const product = await fetchById(id);
        if(product){
            res.status(200).json({ ...product.dataValues, img: convertBufferToString(product.dataValues.img)})
        }
    }catch (e){
        res.status(500).json({
            error: {
                message: e.message
            }
        })
    }
}

const fetchAll = async (req, res) => {
    try {
        const result = await fetchAllProducts();

        const response = result.map((prod) => ({
            ...prod?.dataValues,
            img: convertBufferToString(prod?.dataValues.img),
        }));
        if(response){
            res.status(200).json(response)
        }
    } catch (err){
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
};

const  postProduct = async (req, res) => {
    const payload = req.body;

    try {
        const result = await postProductDB(payload);
        if(result){
            res.status(200).json(result)
        }
    } catch (err){
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;

    try {
        const result = await putProductDB(id, payload);
        if(result[0] === 0){
            res.status(404).json({
                message: 'Not found'
            })
        }
        if(result[0] === 1){
            res.status(200).json({
                message: 'Product updated successfully'
            })
        }
    } catch (err){
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteProductDB(id);
        if(result === 0){
            res.status(404).json({
                message: 'Not found'
            })
        }
        if(result === 1){
            res.status(200).json({
                message: "Product deleted successfully"
            })
        }
    } catch (err){
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
};

module.exports = { fetchProductById, fetchAll, postProduct, updateProduct, deleteProduct }