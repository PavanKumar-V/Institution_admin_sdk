import { db } from "../database/firebase-admin.js";
import User from "../models/user.js";
import { auth } from "../database/firebase.js";

export const getIndexPage = async (req, res) => {
  try {
    res.status(200).redirect("/dashboard");
  } catch (error) {
    console.log(error.message);
  }
};

export const getDashboard = async (req, res) => {
  try {
    const users = await User.fetchAll();
    res.status(200).render("index", { title: "dashboard", users: users });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getClass = async (req, res) => {
  try {
    res.status(200).render("class", { title: "classes" });
  } catch (error) {
    res.status(400).render("class", { title: "ERROR IN DASHBOARD", users: [] });
  }
};
