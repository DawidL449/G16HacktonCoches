const request = require("supertest");
const { app } = require("../app");

describe("testing api", () => {
  let response = Response;
  describe('testing route "/"', () => {
    beforeAll(async () => {
      response = await request(app).get("/");
    });
    test('should return code 200 and content-type "application/json"', async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("application/json");
    });
    test('should return "hello world"', async () => {
      expect(response.body).toBe("hello world");
    });
  });
});

//Import express library
/*const supertest = require
//const cors = require("cors");
const { categoriesRouter } = require("./routers/categoriesRoutes");
const { carsRouter } = require("./routers/carsRoutes");
const { motoBikeRouter } = require("./routers/motoBikeRouters");
const { app } = require("./app")

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/categories', categoriesRouter )
app.use('/api/v1/cars', carsRouter)
app.use("/api/v1/motobike", motoBikeRouter);
app.use("/api/v1/ads", adsRouter);*/
