import { Request, RequestHandler, Response } from "express";
import { v4 as uid } from "uuid";
import Connection from "../Helpers/db.helper";
const db = new Connection();

interface ExtendedRequest extends Request {
  body: {
    name: string;
        sender: string;
        sendername: string
        receiver: string;
        receivername: string
        destination: string;
        weight: string;
        price: string;
        status: string;
        isDeleted: string;
  };
}
export const newOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    const id = uid();
    const isDeleted: string = "false";
    const status: string = "Shipping";
    const {
      name,
      sender,
      sendername,
      receiver,
      receivername,destination,
      weight,
      price,
    } = req.body;
    db.exec("CreateUpdateOrder", {
      id,
      name,
      sender,
      sendername,
      receiver,
      receivername,
      destination,
      weight,
      price,
      status,
      isDeleted,
    });
    res
      .status(201)
      .json({ message: "Order created successfully" });
  } catch (error) {
    res
      .status(200)
      .json({ error });
  }
};

export const getOrders: RequestHandler = async (req, res) => {
  try {
    const { recordset } = await db.exec("getOrders");
    res
      .status(200)
      .json(recordset);
  } catch (error) {
    res
      .status(500)
      .json({ error });
  }
};

export const getOrder: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const id = req.params.id;
    const { recordset } = await db.exec("getOrder", { id });
    if (!recordset[0]) {
      res
        .status(404)
        .json({ message: "Order not found" });
    } else {
      res
        .status(200)
        .json(recordset);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error });
  }
};

export const updateOrder: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted: string = "true";
    const { name, sender, sendername,receiver,receivername, destination, weight, price, status } =
      req.body as {
        name: string;
        sender: string;
        sendername: string
        receiver: string;
        receivername: string
        destination: string;
        weight: string;
        price: string;
        status: string;
        isDeleted: string;
      };
    const { recordset } = await db.exec("getOrder", { id });
    if (!recordset[0]) {
      res
        .status(404)
        .json({ message: "Order not found" });
    } else {
      await db.exec("CreateUpdateOrder", {
        id,
        name,
        sender,
        sendername,
        receiver,
        receivername,
        destination,
        weight,
        price,
        status,
        isDeleted,
      });
      res
        .status(200)
        .json({ message: "Order updated successfully" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({error});
  }
};

export const deleteOrder: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const id = req.params.id;
    const { recordset } = await db.exec("getOrder", { id });
    if (!recordset[0]) {
      res
        .status(404)
        .json({ message: "Order not found" });
    } else {
      await db.exec("deleteOrder", { id });
      res
        .status(200)
        .json({ message: "Order deleted successfully" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ error });
  }
};
