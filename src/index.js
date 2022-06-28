module.exports = function reverse (n) {
    let maxSt = 0;  
    let a = Math.abs(n);
    let c;
    while (a>0){
        c = a % 10;
        a = (a-c) / 10;
        maxSt++
    }
    
    let r = 0;
    let rez = 0;
    a=Math.abs(n);
    while (a>0){
        c = a % 10;
        a = (a-c) / 10;
        r++;
        rez += c * (10 ** (maxSt-r));
    }
    
    //return n>=0 ? rez : -rez;
    return rez;
    }
