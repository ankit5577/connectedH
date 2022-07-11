const UserModel = require("../models/user.model");
const { sendResponse, sendError } = require("./_helper");

const login = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.password) {
      sendError(
        {
          title: "invalid_input",
          msg: `username or password not exists username:${req.body.username} || password:${req.body.password}`,
        },
        res
      );
    } else {
      const data = await UserModel.findOne({
        username: req.body.username,
      });
      if (!data) {
        sendError(
          {
            title: "no_user",
            msg: "no user exists",
          },
          res
        );
      } else {
        if (req.body.password === data.password) {
          sendResponse(
            {
              msg: `user ${req.body.username} is logged in`,
              data: { ...data._doc, password: "" },
            },
            res
          );
        } else {
          sendError(
            {
              title: "invalid_cred",
              msg: "invalid credentials",
            },
            res
          );
        }
      }
    }
  } catch (error) {
    console.log("ERROR at login");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

const signup = async (req, res, next) => {
  try {
    const data = await UserModel.find({
      username: req.body.username.trim().toLowerCase(),
    });
    if (data.length !== 0) {
      sendError(
        {
          title: "user_exist",
          msg: "user with same username exists",
        },
        res
      );
    } else {
      let local_model = new UserModel(req.body);
      await UserModel.create(local_model).then((user) => {
        sendResponse(
          {
            msg: `user ${req.body.email} is logged in`,
            data: { ...user._doc, password: "" },
          },
          res
        );
      });
    }
  } catch (err) {
    console.log("ERROR at signup");
    sendError(
      {
        title: "server_error",
        msg: err.message,
      },
      res
    );
  }
};

module.exports = {
  login,
  signup,
};