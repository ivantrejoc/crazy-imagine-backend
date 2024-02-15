const { User } = require("../DB_connection");

//Crear User:
const createUser = async (name, email, password) => {
  try {
    await User.create({
      name,
      email,
      password
    });
  } catch (error) {
    console.error(error.message);
  }
};

const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error(error.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    console.error(error.message);
  }
};

const login = async (email) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    return user;
  } catch (error) {
    console.error(error.message);
  }
};

//obtener user:

module.exports = {
  createUser,
  getUsers,
  getUserById,
  login
};
