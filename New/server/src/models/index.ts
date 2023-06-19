import { Sequelize } from "sequelize";
import { ParfumeFactory } from "./parfume";
import { parfumeList } from "./parfumeList";

const sequelize = new Sequelize("parfumelist", "admin", "admin", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

const Parfume = ParfumeFactory(sequelize);

async function parfumeDataToDB() {
  try {
    await Promise.all(parfumeList.map((data) => Parfume.create(data)));
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await parfumeDataToDB();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
