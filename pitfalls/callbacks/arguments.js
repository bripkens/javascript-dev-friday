var log = console.log.bind(console);
for (var i = 0; i < 5; i++) {
  setTimeout(log, 500, i);
}