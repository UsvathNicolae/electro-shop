const { fetchAllUsers, postUserDB, putUserDB, deleteUserDB } = require('../repository/userRepository');

const fetchAll = async (req, res) => {
    try {
        const result = await fetchAllUsers();
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

const  postUser = async (req, res) => {
    const payload = req.body;

    try {
        const result = await postUserDB(payload);
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

const updateUser = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;

    try {
        const result = await putUserDB(id, payload);
        if(result[0] === 0){
            res.status(404).json({
                message: 'Not found'
            })
        }
        if(result[0] === 1){
            res.status(200).json({
                message: 'User updated successfully'
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

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteUserDB(id);
        if(result === 0){
            res.status(404).json({
                message: 'Not found'
            })
        }
        if(result === 1){
            res.status(200).json({
                message: "User deleted successfully"
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

module.exports = { fetchAll, postUser, updateUser, deleteUser }