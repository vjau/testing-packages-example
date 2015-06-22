Testing Meteor Packages
---

Steps to reproduce:

* `git clone git@github.com:chmac/testing-packages-example.git`
* `cd testing-packages-example`
* `meteor test-packages email-on-startup`

Note that in packages/fake-email/fake-email.coffee line 6 is called before the
FakeEmail object can be stubbed in email-on-startup-tests.coffee.
