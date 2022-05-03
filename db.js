const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" })

module.exports = {
    db: 'mongodb+srv://krishdev:krishdev@cluster0.ul1kq.mongodb.net/imgupload'
    // db: process.env.DATABASE
};