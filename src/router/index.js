const { Router } = require("express");
const handlersUser = require("../handlers/userHandlers")
const router = Router();

// router.use("/");
//Rutas de user
router.use("/user", handlersUser);



module.exports = router;