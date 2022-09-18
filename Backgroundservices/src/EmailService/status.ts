import ejs from "ejs";
import dotenv from "dotenv";
import {Iparcel} from "../Models/order.model"
import sendMail from "../Helpers/email.helper";
import Connection from "../Helpers/db.helper";
const db = new Connection();
dotenv.config();



const updateStatus = async () => {
  const parcels: Iparcel[] = await(
    await db.exec("orderEmailNotSent")
  ).recordset;
  for (let parcel of parcels) {
    switch (parcel.status) {
      case "Shipping":
        ejs.renderFile(
          "templates/shipping.ejs",
          { name: parcel.receivername },
          async (data) => {
            let messageoption = {
              from: process.env.EMAIL,
              to: parcel.receiver,
              subject: `Order status changed!!`,
              html: data,
            };

            try {
              await sendMail(messageoption);
              await db.exec("orderSetEmailSent",{id:parcel.id});
              console.log("Email sent");
            } catch (error) {
              console.log(error);
            }
          }
        );
        break
      case "Delivered":
        ejs.renderFile(
          "templates/delivered.ejs",
          { name: parcel.receivername },
          async (data) => {
            let messageoption = {
              from: process.env.EMAIL,
              to: parcel.receiver,
              subject: `Order status changed!!`,
              html: data,
            };

            try {
              await sendMail(messageoption);
              await await db.exec("orderSetEmailSent", {id: parcel.id });
              console.log("Email sent");
            } catch (error) {
              console.log(error);
            }
          }
        );
        break
      case "Cancelled":
        ejs.renderFile(
          "templates/cancelled.ejs",
          { name: parcel.receivername },
          async (data) => {
            let messageoption = {
              from: process.env.EMAIL,
              to: parcel.receiver,
              subject: `Order status changed!!`,
              html: data,
            };

            try {
              await sendMail(messageoption);
              await await db.exec("orderSetEmailSent", { id:parcel.id });
            } catch (error) {
              console.log(error);
            }
          }
        );
    }
  }
};

export default updateStatus;
