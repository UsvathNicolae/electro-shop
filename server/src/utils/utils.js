const convertBufferToString = (value) => {
    return Buffer.from(value).toString();
};

module.exports = {convertBufferToString}