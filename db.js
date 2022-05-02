const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" })

module.exports = {
    // db: 'mongodb://localhost:27017/react-fileupload-db'
    db: process.env.DATABASE
};