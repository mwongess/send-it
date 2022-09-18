import dotenv from 'dotenv'
dotenv.config()

 export const sqlConfig = {
   user: process.env.DB_USER as string,
   password: process.env.DB_PWD as string,
   database: process.env.DB_NAME as string,
   server: "SQL5103.site4now.net",
   pool: {
     max: 10,
     min: 5,
     idleTimeoutMillis: 30000,
   },
   options: {
     encrypt: false,
     trustServerCertificate: false,
   },
 };