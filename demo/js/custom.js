// custom.js
console.log('custom.js');
LazyScript.load('jquery', function(global) {
  console.log(global.jQuery.fn);
});
