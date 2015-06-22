var sr = new StartupRunner(FakeEmail.send.bind(FakeEmail));

sr.run();