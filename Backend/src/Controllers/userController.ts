import { Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../Config/config";
import { v4 as uid } from "uuid";
import bcrypt from "bcrypt";
import { UserSchema, UserSchema2 } from "../Helpers/userValidator";
import { IUser } from "../Model/users.model";
import jwt from "jsonwebtoken";
import Connection from "../Helpers/db.helper";
const db = new Connection();

import dotenv from "dotenv";
dotenv.config();

import { Data } from "../Model/users.model";

interface Extended extends Request {
  info?: Data;
}

interface ExtendedRequest extends Request {
  body: {
    email: string;
    password: string;
    name: string;
  };
}
// ++++++++++++++++++++++++++ SIGN UP NEW USERS +++++++++++++++++++++++++++++++++++++++
export const newUser = async (req: ExtendedRequest, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const id = uid();
    const role = 'user'
    const {name , email, password} = req.body;
    const { error, value } = UserSchema.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    db.exec("newUser",{id,email,name,hashedpassword,role})
    res.json({ message: "Account created successfully" });
  } catch (error) {
    res.json({ error });
  }
};

// ++++++++++++++++++++++++++ SIGN IN USERS +++++++++++++++++++++++++++++++++++++++++++++
export const loginUser = async (req: ExtendedRequest, res: Response) => {
  try {
    const { email, password } = req.body;
    const pool = await mssql.connect(sqlConfig);
    const { error, value } = UserSchema2.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message });
    }
    const user: IUser[] = await (
      await db.exec('getUser',{email})
    ).recordset;

    if (!user[0]) {
      return res.json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.json({ message: "Incorrect password" });
    }
    const payload = user.map((item) => {
      const { password, ...rest } = item;
      return rest;
    });
    const token = jwt.sign(payload[0], process.env.KEY as string, {
      expiresIn: "3600s",
    });
    res.json({
      message: "Logged in successfully",
      token,
    });
  } catch (error) {
    res.json({ error });
  }
};
// ++++++++++++ CHECK USER ROLE FOR REDIRECTION ++++++++++++++++++++
export const checkUser = async (req: Extended, res: Response) => {
  if (req.info) {
    res.json({ name: req.info.name, role: req.info.role });
  }
};
