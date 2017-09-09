(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var ARRAY_PROTO = Array.prototype;

  nx.pull = function (inArray) {

    var args_ = ARRAY_PROTO.slice.call(arguments,1);
    for (var i = 0; i < args_.length; i++) {
      var value = args_[i];
      var len = inArray.length;
      for (var j = 0; j < len; j++) {
        var element = inArray[j];
        if( value === element){
          inArray.splice(j,1);
          j--;
          len--;
        }
      }
    }

    return inArray;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pull;
  }

}());
