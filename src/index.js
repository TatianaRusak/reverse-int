module.exports = function reverse(n) {
    // 'use strict';
    n = (Math.abs(n)).toString();
    let result = '';    
    for (let i = 0; i < n.length; i++) {
        result = `${n[i]}${result}`;
    }
    return result;
}
