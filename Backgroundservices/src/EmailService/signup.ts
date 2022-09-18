import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../Helpers/email.helper";
import { IUser } from "../Models/user.model";
import Connection from "../Helpers/db.helper";
const db = new Connection();

dotenv.config();

const welcomeUser = async () => {
  const users: IUser[] = await (await db.exec("notWelcomed")).recordset;

  for (let user of users) {
    ejs.renderFile(
      "templates/signup.ejs",
      { name: user.name},
      async (error, data) => {
        let messageoption = {
          from: process.env.EMAIL,
          to: user.email,
          subject: `Thank you ${user.name} for signing up`,
          html: data,
        };
        try {
          await sendMail(messageoption);
          await db.exec("welcome", { id: user.id });
          console.log("Email sent");
        } catch (error) {
          console.log(error);
        }
      }
    );
  }
};

export default welcomeUser;
