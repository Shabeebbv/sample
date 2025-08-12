
function str(x){
    if (x.length==0){
        return ""
    }
    return x[x.length-1] + str(x.slice(0,-1))
    
}
console.log((str("shabeeb")));
