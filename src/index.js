module.exports = function reverse (n) {
    let a = Math.abs(n);
    let maxSt = Math.floor(Math.log10(a))+1;  
    let c = 0, r = 0, rez = 0;

    while (a>0){
        c = a % 10;
        a = (a-c) / 10;
        r++;
        rez += c * (10 ** (maxSt-r));
    }
    
    return rez;
}
