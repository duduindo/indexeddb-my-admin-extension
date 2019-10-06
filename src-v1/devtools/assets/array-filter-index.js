/* eslint-disable */

if (!Array.prototype.filterIndex) {
  Array.prototype.filterIndex = function(func, thisArg) {
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    const len = this.length >>> 0
    const res = new Array(len)
    const t = this
    let c = 0
    let i = -1

    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = i;
          }
        }
      }
    }
    else {
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = i;
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}

/* eslint-enable */
