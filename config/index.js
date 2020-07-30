// dbms

const mysql = require('mysql');

//connection
const connection = mysql.createConnection({
    user :'root',
    host :'localhost',
    password:'',
    database: 'tokopedia'
})
   
//export
module.export= connection;