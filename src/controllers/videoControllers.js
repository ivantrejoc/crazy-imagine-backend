const sequelize = require("sequelize");
const { Video, Like, Unlike, Comment } = require("../DB_connection");

//Crear Videos:
const createVideo = async (title, link) => {
  try {
    await Video.create({
      title,
      link
    });
  } catch (error) {
    console.error(error.message);
  }
};

//Crear lotes de Videos:
const bulkCreateVideos = async (videosData) => {
  try {
    await Video.bulkCreate(videosData);
  } catch (error) {
    console.log(error.message);
  }
};

const getVideos = async () => {
  try {
    const videos = await Video.findAll({
      order: sequelize.literal("RANDOM()"), // Orden aleatorio
      include: {
        model: Comment,
        attributes: ["user_id", "comment"] // Solo seleccionamos los atributos necesarios de los comentarios
      }
    });
    return videos;
  } catch (error) {
    console.error(error.message);
  }
};

const getVideoById = async (id) => {
  try {
    const video = await Video.findByPk(id);
    return video;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  createVideo,
  bulkCreateVideos,
  getVideos,
  getVideoById
};
