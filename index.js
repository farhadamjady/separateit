"use strict";

function separateit(str,options) {
    var type=typeof str;
    if(str && type!=='object'){
        str=(type=='string'?str:str.toString())
        var options=options || {},
            delimeter=options.delimeter || ",",
            numToSeparate=options.num || 3,
            flag=options.flag || "g",
            regex=new RegExp("\\B(?=(\\d{"+numToSeparate+"})+(?!\\d))",flag)
        return str.replace(/\D/g,"").replace(regex,delimeter);
    }else{
        throw new Error("first argument required!")
    }
}

module.exports=separateit;