const { DataTypes, INTEGER } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Video",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      link: {
        type: DataTypes.STRING,
        allowNull: false
      },

      like_count: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      unlike_count: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      popularity_count: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: true
    }
  );
};
