// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


// I - object, array, values
// O - string
// C -
// E - undefined and functions omitted in objects and array

// check data type of input
// recursive calls for objects and array
// if object or array, check values for undefined or function
// numbers, stings, and booleans are turned to string ('"string"')
var stringifyJSON = function(obj) {

  var result = '';
  // if undefined or function
  if (undefined || typeof obj === 'function') {
    return;
  }
  // if number
  // number.toString();
  if (typeof obj === 'number') {
    result.concat(obj.toString());
  }
  // if string
  // return
  if (typeof obj === 'string') {
    result.concat('\'' + obj + '\'');
  }
  // if boolean
  // boolean.toString();
  if (typeof obj === 'boolean') {
    result.concat(obj.toString());
  }
  // object
  // if object
  // recursive call
  if (typeof obj === 'object') {
    // use object.keys make array of keys
    // use length method on array to set last property to variable lastKey

    result.concat('{');
    // iterate over object keys
    // pass each property in to recursive call
    for (var i in obj) {
      result.concat(stringifyJSON(i));
      result.concat(':');
      result.concat(stringifyJSON(obj[i]));
      // if key equals lastKey
      // check if final key equal to lastKey variable

      result.concat(',');
    }
    result.concat('}');

  }
  // array
  // if array
    // recursive call

  return result;

};
