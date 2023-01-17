const request = require('supertest')
const app = require('./index')

describe("POST /login", () => {
  describe("Correct emai et password", () => {
    test("succes", async () => {
      const res = await request(app).post("/login").send({
        email: "selyakni@gmail.com",
        password: "1234567890",
      });
      expect(res.statusCode).toBe(200);
    });
});

describe("POST /login", () => {
    describe("email ou password incorrect", () => {
      test("", async () => {
        const res = await request(app).post("/login").send({
          email: "incorect@gmail.com",
          password: "incorect",
        });
        expect(res.message).toBe('402');
      });
  });
 });
});