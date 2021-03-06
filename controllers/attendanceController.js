import { db } from "../database/firebase-admin.js";
import User from "../models/user.js";
import Subject from "../models/subjects.js";
import { auth } from "../database/firebase.js";

export const getAttendance = async (req, res) => {
  try {
    const subjects = await Subject.fetchAll();
    const users = await User.fetchAll();
    subjects.forEach((subject) => {
      console.log(subject.attendance["2022-05-04"]);
    });
    res.status(200).render("attendance", { title: "attendance", users: users });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAttendanceDate = async (req, res) => {
  try {
    // const data = req.body;
    const users = new User("", "", "", "CSE", 6, "A", "");
    const data = await users.fetchSpecific();
    // console.log(req.body.data);
    // res.send({
    //   title: "attendance",
    //   users: data,
    //   response: req.body.data,
    // });
    // console.log(data);
    res.render("attendance", { title: "attendance", users: data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
