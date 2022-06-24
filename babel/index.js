"use strict";

var app = http.app("0.0.0.0", "3000", false);

function a() {
  return http.result(200, "Hello");
}

app.get("/", a.toString());
app.run();