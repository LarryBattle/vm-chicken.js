/**
* Test caches for chichen.js
* Work in Progress, Not tested
* @requires Qunit.js
*/
test( "test `chicken`", function(){
  var fn = chicken;
	var code = "chicken";
	var input = "";
	
	equal( fn( code, input ), "chicken" );
});
test( "test hello world", function(){
	var fn = chicken;
	var code = [
		"chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken",
		"chicken chicken chicken chicken chicken chicken"
	].join("\n");
	var input = "Chicken Power!";
	
	equal( fn( code, input ), "Chicken Power!" );
});
