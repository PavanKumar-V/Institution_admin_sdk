import express from "express";

import {
  getIndexPage,
  getDashboard,
  getClass,
  getUsers,
  blockUser,
  // getAttendance,
} from "../controllers/userController.js";

import { auth } from "../database/firebase.js";

const router = express.Router();

// router.all("*", (req, res, next) => {
//   console.log("all");
//   if (auth.currentUser) {
//     next();
//   } else {
//     res.redirect("/login");
//   }
// });
router.get("/", getDashboard);
router.get("/dashboard", getDashboard);
router.get("/classes", getClass);
router.get("/users", getUsers);
router.post("/blockuser", blockUser);
// router.get("/attendance", getAttendance);

export default router;
