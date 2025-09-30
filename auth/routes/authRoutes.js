const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const auth = require("../middleware/auth");
const asyncHandler = require("../utils/asyncHandler");

router.post("/register", asyncHandler(authController.register));
router.post("/login", asyncHandler(authController.login));
router.post("/logout", asyncHandler(authController.logout));
router.post("/refresh", asyncHandler(authController.refresh));
router.get(
  "/protected",
  auth,
  asyncHandler((req, res) => {
    res.json({ message: "Secure data", userId: req.userId });
  })
);

module.exports = router;
