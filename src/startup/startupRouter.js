const wrongRequest = require("../controllers/404_controller");
const usersRouter = require("../routes/users_routes");

const usersBaseRoute = "/api/users";

module.exports = function (app) {
  app.use(usersBaseRoute, usersRouter);
  app.use("*", wrongRequest.apiNotFound_control);
};