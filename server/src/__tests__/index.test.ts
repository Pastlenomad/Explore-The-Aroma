import supertest from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import createServer from "../serverFunction";
const app = createServer();

describe("Back end testing", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  it("the server is up & running", async () => {
    await supertest(app).get("/").expect(200);
  });

  it("the database is connected", async () => {
    const db = mongoose.connection;
    expect(db.readyState).toBe(1);
  });

  it("data flow from database working properly", async () => {
    const res = await supertest(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.data)).toBeTruthy();
  });
});
