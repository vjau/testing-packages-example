// Write your tests here!
// Here is an example.
Tinytest.add('startup test', function (test) {
  var funcCalledSpy = function(){
    console.log("function called at startup !");
  };
  var sr = new StartupRunner(funcCalledSpy);
  sr.run();
  test.equal(true, true);
});
