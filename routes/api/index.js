const router = require("express").Router();
const bookRoutes = require("./Books");

// Book routes
router.use("/Books", bookRoutes);

module.exports = router;
