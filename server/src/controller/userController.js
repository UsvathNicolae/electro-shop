const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { fetchAllUsers, postUserDB, putUserDB, deleteUserDB, fetchUserByEmail} = require('../repository/userRepository');

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

//login, user logins with email and password
const loginUser = async (req, res) => {
    const payload = req.body;

    try {
        const user = await fetchUserByEmail(payload?.email);
        if(user){
            const dbPassword = user?.dataValues?.password;
            bcrypt.compare(payload?.password, dbPassword, (err, result) => {
                if(err){
                    return res.status(500).json({
                        error: {
                            message: err.message
                        }
                    })
                }

                if(result){
                    const token = jwt.sign(
                        {
                            userId: user?.dataValues?.id,
                            email: user?.dataValues?.email,
                            username: user?.dataValues?.username,
                            role: user?.dataValues?.role
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token
                    })
                }
                //incorrect password
                return res.status(401).json({
                    message: 'Auth failed'
                })
            });
        } else {
            return res.status(401).json({
                message: 'Auth failed'
            })
        }

    }catch (err){
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
};

//sign up
const  postUser = async (req, res) => {
    const payload = req.body;

    try {
        const user = await fetchUserByEmail(payload?.email);
        if(user){
            return res.status(409).json({
                message: "Mail exists"
            });
        }
        bcrypt.hash(payload?.password, 10, async (err, hash) => {
            if(err){
                return res.status(500).json({
                    error: {
                        message: err.message
                    }
                })
            }
            payload.password = hash;
            try{
                const result = await postUserDB(payload);
                if(result){
                    res.status(200).json(result)
                }
            }catch (err) {
                return res.status(500).json({
                    error: {
                        message: err.message
                    }
                })
            }
        });

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

module.exports = { fetchAll, postUser, updateUser, deleteUser, loginUser }