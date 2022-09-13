import { Request, RequestHandler, Response } from "express";
import { v4 as uid } from "uuid";
import Connection from "../Helpers/db";
const db = new Connection();

interface ExtendedRequest extends Request {
  body: {
    name: string;
    sender: string;
    receiver: string
    destination: string
    status: string
    isDeleted: string
  };
}
export const newOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    const id = uid();
    const isDeleted:string = "true"
    const { name, sender, receiver,destination,status} = req.body;
    db.exec("newOrder",{id, name,sender,receiver,destination,status,isDeleted});
    res.json({ message: "Order created Successfully" });
  } catch (error) {
    res.json({ error });
  }
};

export const getOrders: RequestHandler = async (req, res) => {
  try {
    const { recordset } = await db.exec("getOrders");
    res.json(recordset);
  } catch (error) {
    res.json({ error });
  }
};

export const getOrder: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const id = req.params.id;
    const { recordset } = await db.exec("getOrder", { id });
    if (!recordset[0]) {
      res.json({ message: "Order not found" });
    } else {
      res.json(recordset);
    }
  } catch (error) {
    res.json({ error });
  }
};

export const updateOrder: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted: string = "true";
    const { name, sender, receiver, destination, status} = req.body as {
      name: string;
      sender: string;
      receiver: string;
      destination: string;
      status: string;
      isDeleted: string;
    };
    const { recordset } = await db.exec("getOrder", { id });
    if (!recordset[0]) {
      res.json({ message: "Order not found" });
    } else {
      await db.exec("updateOrder", { id, name,sender, receiver,destination,status,isDeleted });
      res.json({ message: "Order updated successfully" });
    }
  } catch (error: any) {
    res.json({ error });
  }
};

export const deleteOrder: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const id = req.params.id;
    const { recordset } = await db.exec("getOrder", { id });
    if (!recordset[0]) {
      res.json({ message: "Order not found" });
    } else {
        await db.exec('deleteOrder', {id})
      res.json({message:'Order deleted successfully'})

      // await db.query(`DELETE FROM Orders WHERE id='${id}'`);
      // res.json({ message: "Order deleted successfully" });
    }
  } catch (error: any) {
    res.json({ error });
  }
};
