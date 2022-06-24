"use strict";

var _routes = require("./routes");

var app = http.app("0.0.0.0", "3000", false);
var routes = {
  get: _routes.getRoute,
  post: _routes.postRoute,
  _any: function _any() {}
};
app.get("/", "routes.get");
app.post("/", "routes.post");
app.run();

routes._any();