/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {

    let lower = title.toLowerCase().split(" ")
    let res = []
    let cap = lower.map((ch) => ch.at(0).toUpperCase() + ch.slice(1))
   for(let i =0 ; i < cap.length ; i++){
    
     if(cap[i].length < 3){
       res.push(cap[i].toLowerCase())
     }else{
       res.push(cap[i])
     }
   }
 
    return res.join(" ")
 
    
};