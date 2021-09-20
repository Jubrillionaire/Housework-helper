"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _pg = require("pg");

var _usersRoutes = _interopRequireDefault(require("./routes/users-routes"));

var _clientsProfilesRoutes = _interopRequireDefault(require("./routes/clients-profiles-routes"));

var _workersProfilesRoutes = _interopRequireDefault(require("./routes/workers-profiles-routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use("/api/users", _usersRoutes["default"]);
app.use("/api/profiles", _clientsProfilesRoutes["default"]);
app.use("/api/profiles", _workersProfilesRoutes["default"]);
var password = process.env.PASSWORD;
var client = new _pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'housework_helper_app',
  password: password,
  port: 5432
});
global.client = client;
client.connect().then(function () {
  console.log("database connected!");
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("running on port ".concat(PORT));
});
var _default = app;
exports["default"] = _default;