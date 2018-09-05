const router = require("express").Router();
const reportsRoutes = require("./reports");
const usersRoutes = require("./users");
// routes
router.use("/reports", reportsRoutes);
router.use("/users", usersRoutes);
module.exports = router;
