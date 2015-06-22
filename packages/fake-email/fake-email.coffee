FakeEmail = {}

FakeEmail.send = (message = false)->
  console.log "FakeEmail.send() was called, it should not have been, with the message: #{ message }"

FakeEmail.send 'FakeEmail has been instantiated'
