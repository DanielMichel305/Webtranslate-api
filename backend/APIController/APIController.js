const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const axios = require('axios');



const LTEManger = new (require('..\\translationEngineManger'))(); 

const RTL_LANGUAGES = ['fa','he', 'ur', 'ar'];

class APIController{

    static async TranslatePage(req,res){

       
        //if(req.body.format !== 'html'){
        //    res.status(400).json({ERROR: "Only HTML Format currently supported. Check request Headers"});    
        //}
        //else{
            const reqData = {
                'q' : req.body.q,
                'format' : 'html',
                'source' : req.body.source,
                'target' : req.body.target
            }
            await axios.post(`http://${LTEManger.APIHost}:${LTEManger.APIPort}/translate`, reqData)
                .then(async (response)=>{
                    const pageBody = await this.formatPage(reqData.target, response.data.translatedText);
                    res.send(pageBody);
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(500).json({ERROR:"Failed,error in Libre Translation Engine"});
                });
            }

    //}

    static async formatPage(language, pageBody){
        if(!RTL_LANGUAGES.includes(language)){
            return pageBody;
        }
        else{                                           ////TODO: FIGUERE OUT A WAY TO TEST THIS!!!
            let openTag="";
            for(let i=0; i<pageBody.length;i++){
                openTag+=pageBody[i];
                if(openTag[i]==='!'){       ///This is a <!Doctype html> tag
                    for(let j=0;j<pageBody;j++){
                        if(pageBody[j]==='>'){ ///Closing tag
                            i=j;
                            break;
                        }  
                    }
                }
                if(pageBody[i]==='>'){
                    break;
                }
            }
            const rtlFormat = ` lang = \"${language}\" dir = \"rtl\"`;
            return pageBody.slice(0, pageBody.indexOf(openTag)+openTag.length-1) + rtlFormat + pageBody.slice(pageBody.indexOf(openTag)+openTag.length-1);
        }
    }

    


}

module.exports = APIController;