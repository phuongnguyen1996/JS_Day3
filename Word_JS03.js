function min(x,y){
    if(x<y){
        return x;
    }
    else{
        return y;
    }
}

function isEven(x){
    if (x%2==0) {
        return true;
    } else{
        return false;
    }
}

function countBs(x){
    var dem=0;
    var t=x.split("");
    for (let i = 0; i < t.length; i++) {
        if(t[i] === "B"){
            dem++;
        }
    }
    return dem;
}

function countChar(x,y){
    var dem=0;
    var t=x.split("");
    for (let i = 0; i < t.length; i++) {
        if(t[i] === y){
            dem++;
        }
    }
    return dem;
}
