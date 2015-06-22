sinon = Npm.require 'sinon'

###
If we do not include `api.use('fake-email');` in package.js then FakeEmail will
be undefined here, and so we cannot stub it. Neither in coffeescript nor
javascript. It is never visible in this scope.
###
sinon.stub FakeEmail, 'send'

Tinytest.add 'EmailOnStartup.send() - should not throw', (test) ->
  threw = false
  try
    EmailOnStartup.send()
  catch e
    console.log 'threw'
    console.log e
    threw = true
  # test.equal EmailSend.send.called, true
  test.equal threw, false
