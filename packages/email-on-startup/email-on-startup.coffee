# Send an email
EmailOnStartup = {}

EmailOnStartup.send = ->
  FakeEmail.send()

# Bind EmailOnStartup to Meteor.startup
Meteor.startup ->
  console.log 'Meteor.startup called'
  EmailOnStartup.send()
