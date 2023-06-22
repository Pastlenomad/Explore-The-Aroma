import supertest from "supertest";
import mongoose from "mongoose";
const mockData = require("../databaseMock.json");
import createServer from "../serverFunction";

const app = createServer();

describe("Back-End testing", () => {
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  it("The server is up & running properly", async () => {
    await supertest(app).get("/").expect(201);
  });

  it("Our database is connected and synced", async () => {
    const isConnected = await new Promise((resolve) => {
      const checkConnection = () => {
        if (mongoose.connection.readyState === 1) {
          resolve(true);
        } else if (mongoose.connection.readyState === 2) {
          setTimeout(checkConnection, 100);
        } else {
          resolve(false);
        }
      };
      checkConnection();
    });
    expect(isConnected).toBe(true);
  });

  it("The data flow between our server app & database is working", async () => {
    const res = await supertest(app).get("/");
    expect(res.statusCode).toEqual(201);
    expect(res.body.slice(0, 2)).toEqual(mockData);
  });
  
});
