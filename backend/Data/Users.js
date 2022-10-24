const bcrypt = require('bcryptjs')

const Users =[
    {
        name:"admin",
        email:"admin@admin.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },

    {
        name:"aminur",
        email:"aminur@gmail.com",
        password:bcrypt.hashSync('12345',10),
        isAdmin:true
    },

    {
        name:"admin1",
        email:"admin1@admin.com",
        password:bcrypt.hashSync('12345',10),
        isAdmin:true
    },
    {
        name:"admin2",
        email:"admin2@admin.com",
        password:bcrypt.hashSync('12345',10),
        isAdmin:true
    },
    {
        name:"admin3",
        email:"admin3@admin.com",
        password:bcrypt.hashSync('12345',10),
        isAdmin:true
    },
]

module.exports = Users