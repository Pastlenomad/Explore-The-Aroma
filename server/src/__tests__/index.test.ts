import supertest from "supertest";
import mongoose from "mongoose";
const mockData = require('../databaseMock.json');
import { MongoMemoryServer } from "mongodb-memory-server";
import createServer from "../serverFunction";


const app = createServer();


// jest.mock('../models/schemas/parfumeSchema', () => ({
//   ...jest.requireActual('../models/schemas/parfumeSchema'),  // Use the real exports
//   Parfume: {  // Except for `Parfume`, which we will mock
//     find: jest.fn().mockImplementationOnce(() => Promise.resolve(parfumeList)),
//   },
// }));

// beforeEach(() => {
//   jest.resetAllMocks();
// });

describe("Back end testing", () => {
  // beforeAll(async () => {
  //   const mongoServer = await MongoMemoryServer.create();
  //   await mongoose.connect(mongoServer.getUri());
  // });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  it("the server is up & running", async () => {
    await supertest(app).get("/").expect(201);
  });

  it("the database is connected", async () => {
    const isConnected = await new Promise(resolve => {
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

  it("data flow from database working properly", async () => {
    const res = await supertest(app).get("/");
    expect(res.statusCode).toEqual(201);
    //console.log(res.body.slice(0,2))
    expect(res.body.slice(0,2)).toEqual(mockData);
  });
});
