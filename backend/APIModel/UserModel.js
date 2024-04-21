const mysql = require('mysql');

var con = mysql.createConnection({   //Figure out a way to get connection data from docker container 2w connection uri
    host: "",
    port: "",
    user: "",
    database: ""

});
con.connect(function(err){
    if(err){
        console.log(err);
        throw err;
    }
});

class UserModel{

    static verifyApiKey(apiKey){

        return new Promise((resolve,reject)=>{
            con.query('Select * From API_USERS where ApiKey = ?', apiKey,function(err, result){
                
                if(err){    
                    console.log(err);
                    reject(err);
                }
                else{
                    if(result.length>0){
                    
                        resolve(true);
                    }
                    else{
                        resolve(false);
                    }
                }
            });
        });
    }

}
module.exports = UserModel