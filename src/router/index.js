const { Router } = require("express");
const handlersUser = require("../handlers/userHandlers")
const handlersVideos = require("../handlers/videoHandlers");
const handlersComment = require("../handlers/commentHandlers")
const router = Router();

// router.use("/");
//Rutas de user
router.use("/user", handlersUser);
//Rutas de videos
router.use("/video", handlersVideos);
//Rutas de comments
router.use("/comment", handlersComment);



module.exports = router;