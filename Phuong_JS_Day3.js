function antiDiagonals(){
    var a = [[1,2,3],[4,5,6],[7,8,9]];
    var res=[];
    var sum=0;
    while(sum<=(2*3-2)){
        var b = [];
        for (var i = 0; i <= sum; i++) {
            if(i<3 && (sum-i)<3){
                var x = a[i][sum-i];
                b.push(x);
            }
        }
        res.push(b);
        sum++;
    }
    return res;
}

function sort(){
    var a = [12,11,13,5,6];
    for (let i = 0; i < a.length-1; i++) {
        for (let j = i+1; j < a.length; j++) {
            if(a[i]>a[j]){
                let temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
            }
        }
    }
    return a;
}
