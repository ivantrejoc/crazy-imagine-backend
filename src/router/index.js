const { Router } = require("express");
const handlersUser = require("../handlers/userHandlers")
const handlersVideos = require("../handlers/videoHandlers");
const router = Router();

// router.use("/");
//Rutas de user
router.use("/user", handlersUser);
//Rutas de videos
router.use("/video", handlersVideos);



module.exports = router;