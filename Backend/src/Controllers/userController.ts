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
    const id = uid();
    const role = "user";
    const { name, email, password } = req.body;
    const { error, value } = UserSchema.validate(req.body);
    if (error) {
      return res
        .status(500)
        .json({ error: error.details[0].message });
    }
    const { recordset } = await db.exec("getUser", { email });

    if (recordset.length > 0) {
      return res
        .status(400)

        .send({ error: "Account exists.Redirecting to login..."});
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    (await db.exec("InsertUpdateUser", { id, email, name, hashedpassword, role }));
    res
      .status(201)
      .json({ message: "Account created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error });
  }
};

// ++++++++++++++++++++++++++ SIGN IN USERS +++++++++++++++++++++++++++++++++++++++++++++
export const loginUser = async (req: ExtendedRequest, res: Response) => {
  try {
    const { email, password } = req.body;
    const { error, value } = UserSchema2.validate(req.body);
    if (error) {
      return res
        .status(500)
        .json({ error: error.details[0].message });
    }
    const user: IUser[] = await (await db.exec("getUser", { email })).recordset;

    if (!user[0]) {
      return res
        .status(404)
        .json({error: "Account doesn't exist"});
    }

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res
        .status(401)
        .json({error: "Incorrect password" });
    }
    const payload = user.map((item) => {
      const { password, ...rest } = item;
      return rest;
    });
    const token = jwt.sign(payload[0], process.env.KEY as string, {
      expiresIn: "3600s",
    });
    res
      .status(200)
      .json({
      message: "Logged in successfully",
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error });
  }
};
// ++++++++++++ CHECK USER ROLE FOR REDIRECTION ++++++++++++++++++++
export const checkUser = async (req: Extended, res: Response) => {
  if (req.info) {
    res
      .status(200)
      .json({ name: req.info.name, role: req.info.role });
  }
};
