import { DataSource } from "typeorm"
import { User } from "./user/user.entity"
import { Event } from "./event/event.entity"
import { Ticket } from "./ticket/ticket.entity"
import { Category } from "./category/category.entity"
import dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_ADDON_HOST || '127.0.0.1',
  port: 3306,
  username: process.env.MYSQL_ADDON_USER || 'root',
  password: process.env.MYSQL_ADDON_PASSWORD || '1234',
  database: process.env.DB_NAME || 'eventlife',
  synchronize: true,
  logging: false,
  entities: [User, Event, Ticket, Category],
});

export default AppDataSource;

