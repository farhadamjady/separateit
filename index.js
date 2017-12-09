"use strict";

function separateit(str,options) {
    var options=options || {},
     delimeter=options.delimeter || ",",
     numToSeparate=options.num || 3,
     regex=new RegExp("\\B(?=(\\d{"+numToSeparate+"})+(?!\\d))",options.flag)
     return str.replace(/\D/g,"").replace(regex,delimeter);
}


module.exports=separateit;