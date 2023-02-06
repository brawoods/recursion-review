// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// I - className
// O - array of elements that have the given className

// recursion check - if it's a parent element in the DOM tree, perform function again


var getElementsByClassName = function(className, element) {
// define empty array
  var result = [];
  // create variable parentElement - if parentElement use, else use document body
  if (!element) {
    var parentElement = document.body;
  } else {
    parentElement = element;
  }

  // recurse case
  // iterate over the document
  // if current element is a parent node
  if (_.contains(parentElement.classList, className)){
    result.push(parentElement);
  }

  if (parentElement.childNodes) {
    parentElement.childNodes.forEach(function (child) {
      // concat result array with result of recursed call function, passing in parent element (may need className again)
      result = result.concat(getElementsByClassName(className, child));
    })
  }

  // else {
  //     // base case
  //     // element is not parent
  //     // push the element to empty array
  //   if (parentElement.classList.contains(className)){
  //       result.push(parentElement);
  //   }
  // }
  // return result array
  return result;
};

