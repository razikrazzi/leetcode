/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {

       let demo = ""
        for(let i = 0; i < address.length ; i++){
      
          if( address[i] === "." ){
         demo += address[i].replace("." , "[.]")
            
          }else{
            demo += address[i]
          }
        }
    
    return demo
};