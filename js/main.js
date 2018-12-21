function iseven(num){
    var result = 1;
    for(var i = num; i > 0; i--){
        result *= i;
        console.log(result);
    }
    return result;
}