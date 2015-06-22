FakeEmail = {};

FakeEmail.send = function(message){
  console.log("FakeEmail.send() was called, it should not have been, with the message:",message);
}