import { hello } from "../src/hello_worls";


describe("test hello", () => {
 it("should return hello world", () => {
   expect(hello()).toBe("Hello world!");
 });
});
