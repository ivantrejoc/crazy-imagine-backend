const { UserVideo } = require("../DB_connection");


//Crear nuevo vidoe visto
const createUserVideo = async (user_id, video_id) => {
  try {
    await UserVideo.create({
      user_id,
      video_id
    });
  } catch (error) {
    console.error(error.message);
  }
};


const getUserVideos = async (id) => {
  try {
    const usersVideo = await UserVideo.findAll({
      where: {
        user_id: id
      }
    });
    return usersVideo;
  } catch(error) {
    console.error(error);
    
  }
}

module.exports = {
  createUserVideo,
  getUserVideos
};
