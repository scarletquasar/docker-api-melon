"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postRoute = exports.getRoute = void 0;

var getRoute = function getRoute(query, headers) {
  return http.result(200, {
    query: query,
    headers: headers
  });
};

exports.getRoute = getRoute;

var postRoute = function postRoute(body, query, headers) {
  return http.result(200, {
    body: body,
    query: query,
    headers: headers
  });
};

exports.postRoute = postRoute;