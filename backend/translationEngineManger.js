require('dotenv').config();


class connectionMangerLT{

    constructor(){
        if(process.env.NODE_ENV === 'development'){
            this.APIHost = process.env.DEV_API_HOST;
            this.APIPort = process.env.DEV_API_PORT;
        }
        else{
            this.APIHost = process.env.PROD_API_HOST;
            this.APIPort = process.env.PROD_API_PORT;
        }
    }

}
module.exports = connectionMangerLT;