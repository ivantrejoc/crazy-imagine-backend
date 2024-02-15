const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("UserVideo", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },

    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      foreingKey: true,
      allowNull: false
    },
    video_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      foreingKey: true,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: Date
    }
  });
};
